import React, { Component } from 'react';
import Router from 'next/router';
import hljs from 'highlight.js'
import Remarkable from "remarkable";

import Layout from '../components/Layout';

import PageShare from '../components/PageShare'
import Comment from '../components/Comment'

import { api } from '../utils/api'
import fetch from 'isomorphic-unfetch';
import Fetch from '../utils/axios';
import * as tools from '../utils/tools';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailData: {},
            commentNewLists:[],
            readCount:0,
            pointCount:0
        }
    }
    componentDidMount() {
        this.readUpdate();
    }
    router = (e) => {
        Router.push(e.currentTarget.getAttribute('data-url'));
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
                    commentNewLists: data.list
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
            Fetch({
                url: api.blog_update + '/' + this.getBlogId()+'/',
                type: 'patch',
                params:{
                    'point_count':this.state.pointCount
                }
            }).then(res=>{
                if(res.data.code ==0){
                    // this.getInitData()
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
            Fetch({
                url: api.blog_update + '/' + this.getBlogId()+'/',
                type: 'patch',
                params:{
                    'read_count':this.state.readCount
                }
            }).then(res=>{
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
        const {dataDetail,commentList} = this.props;
        const data = dataDetail.data;
        if(this.state.commentNewLists.length>0){
            commentList.data.list = this.state.commentNewLists
        }
        const commentLists = commentList.data.list;
        const commentTotal = commentList.data.totalCount;

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
                <Layout>
                <link rel="stylesheet" href="http://res.rdstour.com/static/style/solarized_light.min.css"/>
                <link rel="stylesheet" href="http://res.rdstour.com/static/style/dracula.css"/>
                <div className="dd-section">
                    <div className="d-wrap">
                        <div className="dd-title">{data.title}</div>
                        <div className="dd-intro">
                            <div className="dd-item dd-author">{data.user_name ==='root'?'刀客小子':data.user_name} 发布于{tools.formatTime(data.pubdate)}</div>
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
                            <PageShare />
                        </div>
                    </div>
                    <Comment 
                        blogId={data.id}
                        commentList={commentLists} 
                        commentTotal={commentTotal}
                        updateComment={this.getCommentList} />
                </div>
                </Layout>
                <style jsx>
                {`
                body {
                    background-color: #f7f7f7;
                }
                    .dd-section {
                        max-width: 1170px;
                        margin: .8rem auto 0;
                        min-height: 100vh;
                        background: #fff;
                        position: relative;
                        padding-top: .5rem;
                    }
                    
                    .d-wrap {
                        width: 780px;
                        margin: 0 auto;
                        padding-bottom: 1rem;
                    }
                    
                    .dd-title {
                        padding-top: .10rem;
                        margin: 0 0 .10rem;
                        font-size: 0.24rem;
                    }
                    
                    .dd-intro {
                        font-size: .15rem;
                        color: rgba(0, 0, 0, 0.8);
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                    }
                    
                    .dd-item+.dd-item {
                        margin-left: .15rem;
                    }
                    
                    .dd-author {}
                    
                    .dd-view {}
                    
                    .dd-praise {}
                    
                    .dd-tags {
                        margin: .15rem 0 .10rem;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                    }
                    
                    .dd-tags a {
                        background: #e0e0e0;
                        padding: .03rem .10rem;
                        display: inline-block;
                        margin: 0 .10rem .10rem 0;
                        font-size: .14rem;
                        color: rgba(0, 0, 0, .5);
                        text-decoration: none;
                        cursor: pointer;
                    }
                    
                    .dd-tags a:hover {
                        background: #ccc;
                        color: #666;
                    }
                    
                    .dd-content {
                        color: #3d464d;
                        font-size: .16rem;
                        font-family: "Pingfang SC", STHeiti, "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", SimSun, sans-serif;
                        line-height: .28rem;
                        margin-top: .20rem;
                    }
                    
                    .dd-content p {
                        margin-top: .16rem;
                        margin-bottom: .14rem;
                        line-height: .28rem;
                    }
                    
                    .dd-btn {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: .10rem;
                    }
                    
                    .dd-good {
                        font-size: .20rem;
                        color: #666;
                        position: relative;
                        border: solid 1px #ddd;
                    }
                    
                    .dd-good::before {
                        content: "";
                        position: absolute;
                        left: .15rem;
                        top: .12rem;
                        display: block;
                        width: .22rem;
                        height: .22rem;
                        background: url('http://res.rdstour.com/static/images/dao/icon-good.png') no-repeat;
                        background-size: .22rem .22rem;
                    }
                    
                    .dd-good:hover::before {
                        background: url('http://res.rdstour.com/static/images/dao/icon-good-hover.png') no-repeat;
                        background-size: .22rem .22rem;
                    }
                    
                    .dd-btn-item {
                        padding: .10rem .15rem .11rem .45rem;
                        display: inline-block;
                        cursor: pointer;
                    }
                    
                    .dd-btn-item:hover {
                        color: #333;
                    }
                    
                    .content-btn {
                        margin: .50rem 0 .10rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    

                    
                `}
                </style>
            </div>
        )
    }
}


Details.getInitialProps = async function (context) {
    const {asPath} = context;
    let idArr = asPath.split('/');
    let articleId = parseInt(asPath.split('/')[idArr.length-1]);
    const res = await fetch(api.blog_detail+`/${articleId}/`);
    const dataDetail = await res.json();

    const rex = await fetch(api.comment_list + '?blog_id=' + articleId);
    const commentList = await rex.json();
    
    return {dataDetail,commentList}
}

export default Details;