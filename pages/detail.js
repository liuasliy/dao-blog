import React, { Component } from 'react';
import Router from 'next/router';
import hljs from 'highlight.js'
import Remarkable from "remarkable";

// import '../../style/dracula.css'
// import './style.css'

// import PageShare from '../../components/PageShare'
// import Comment from '../../components/Comment'

// import Fetch from '../../untils/axios'
import { api } from '../utils/api'
import * as tools from '../utils/tools'

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailData: {},
            commentObj:{
                list:[],
                totalCount:0
            },
            readCount:0,
            pointCount:0
        }
    }
    componentDidMount() {
        this.getInitData()
        
        // let dirArr = document.getElementsByTagName('h4')
        // dirArr.map(item=>{
        //     console.log(item)
        // })
        //this.getDirectories(dirArr)
        let _this = this;
        setTimeout(() => {
            _this.getDirectories(document.getElementsByTagName('h4'),document.getElementsByTagName('h3'))
        }, 1000);
    }
    router = (e) => {
        Router.push(e.currentTarget.getAttribute('data-url'));
    }
    getDirectories(dirArr,senArr){
        console.log(dirArr)
        let firstNavArr = [];
        if(dirArr.length>0){
            Array.from(dirArr).map((item,index)=>{
                let ob = {'title':item.innerText,'senlist':[]};
                firstNavArr[index] = ob;
            })
            console.log(firstNavArr)
        }
    }
    
    getInitData() {
        //初始化博客详情
        Fetch({
            url: api.blog_detail + '/' + this.getBlogId() + '/',
            type: 'get',
        }).then(res => {
            console.log(res.data)
            const {code,data} = res.data;
            if(code == 0){
                this.setState({
                    detailData: data,
                    readCount: data.read_count,
                    pointCount: data.point_count
                })
                this.readUpdate();    //更新阅读数
                this.getCommentList();  //获取评论列表
            }
        })
    }
    getBlogId = () =>{
        //获取博客id
        return window.location.href.split('/')[window.location.href.split('/').length-1]
    }

    getCommentList = () =>{
        //获取评论列表
        Fetch({
            url: api.comment_list + '?blog_id=' + this.getBlogId(),
            type: 'get',
        }).then(res => {
            const {code,data} = res.data;
            if(code == 0){
                this.setState({
                    commentObj: {
                        list: data.list,
                        totalCount: data.totalCount
                    }
                })
            }
        })
    }

    thumbUp = () =>{
        //点赞
        let mac = JSON.parse(tools.getCookie('macinfop'))
        if(mac && mac.isThumb&& mac.id == this.getBlogId()) return 
        this.setState((prevState, props)=>({
            pointCount:prevState.pointCount + 1
        }),()=>{
            console.log(this.state.pointCount)
            Fetch({
                url: api.blog_update + '/' + this.getBlogId()+'/',
                type: 'patch',
                params:{
                    'point_count':this.state.pointCount
                }
            }).then(res=>{
                console.log(res)
                if(res.data.code ==0){
                    this.getInitData()
                    tools.setCookie('macinfo',JSON.stringify({
                        id:this.getBlogId(),
                        'isThumb':true,
                    }))
                }
            })
        })
    }
    readUpdate = () =>{
        ///阅读数
        let mac = JSON.parse(tools.getCookie('macinfo'))
        if(mac && mac.isRead && mac.id == this.getBlogId()) return 
        this.setState((prevState, props)=>({
            readCount:prevState.readCount + 1
        }),()=>{
            console.log(this.state.readCount)
            Fetch({
                url: api.blog_update + '/' + this.getBlogId()+'/',
                type: 'patch',
                params:{
                    'read_count':this.state.readCount
                }
            }).then(res=>{
                console.log(res)
                if(res.data.code ==0){
                    tools.setCookie('macinfo',JSON.stringify({
                        // 'mac':mac.mac,
                        id:this.getBlogId(),
                        'isRead':true,
                        // 'isThumb':mac.isThumb
                    }))
                }
            })
        })
        
    }

    render() {
        const data = this.state.detailData
        let markd = new Remarkable({
            html: true,        // Enable HTML tags in source
            xhtmlOut: false,        // Use '/' to close single tags (&lt;br /&gt;)
            breaks: false,        // Convert '\n' in paragraphs into &lt;br&gt;
            langPrefix: 'language-',  // CSS language prefix for fenced blocks
            linkify: true,         // autoconvert URL-like texts to links
            linkTarget: '',           // set target to open link in
            typographer: false,
            quotes: '“”‘’',
            highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(lang, str).value;
                    } catch (__) { }
                }

                try {
                    return hljs.highlightAuto(str).value;
                } catch (__) { }

                return ''; // use external default escaping
            }
        });
        let contextHtml = { __html: markd.render(data.content) };
        
        return (
            <div >
                <div className="dd-section">
                    <div className="d-wrap">
                        <div className="dd-title">{data.title}</div>
                        <div className="dd-intro">
                            <div className="dd-item dd-author">{data.user_name ==='root'?'刀客小子':data.user_name} 发布于{tools.dataFormat(data.pubdate)}</div>
                            <div className="dd-item dd-view">阅读 {data.read_count}</div>
                            <div className="dd-item dd-praise">点赞 {data.point_count}</div>
                        </div>
                        <div className="dd-tags">
                            {
                                data.tags&&data.tags.map((item,index)=>{
                                    return <a  key={index} data-url={'/tag/'+item} onClick={this.router}>{item}</a>
                                })
                            }
                        </div>
                        <div className="dd-content" dangerouslySetInnerHTML={contextHtml}>
                        </div>
                        <div className="content-btn">
                            <div className="dd-btn">
                                <div className="dd-btn-item dd-good" onClick={this.thumbUp}>
                                    点赞 ({data.point_count})
                                </div>
                            </div>
                            {/* <PageShare /> */}
                        </div>
                    </div>
                    {/* <Comment 
                        blogId={this.getBlogId()}
                        commentList={this.state.commentObj.list} 
                        commentTotal={this.state.commentObj.totalCount}
                        updateComment={this.getCommentList} /> */}
                </div>
            </div>
        )
    }
}

export default Details;