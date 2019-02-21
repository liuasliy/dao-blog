import React, { Component } from 'react'
// import './style.css'

import Toast from '../components/Toast';

import Fetch from '../utils/axios'
import { api } from '../utils/api'
import * as tools from '../utils/tools.js'

export default class Comment extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                id:Math.floor((Math.random()*10000000)+1), //window.crypto.getRandomValues(new Uint32Array(10))[0],
                name:'',
                email:'',
                content:'',
                isSave:false
            }
        }
    }
    componentDidMount(){
        this.getStoreInfo()
    }
    handleChange = (e) =>{
        let value = e.currentTarget.value
        let type = e.currentTarget.getAttribute('name')
        let nameValue,emailValue,contentValue,saveValue;
        const { name,email,content,isSave} = this.state.userInfo;
        switch(type){
            case 'name':
                nameValue = value;
                break;
            case 'email':
                emailValue = value;
                break;
            case 'content':
                contentValue = value;
                break;
            case 'save':
                saveValue = e.currentTarget.checked;
                break;
            default:
                break;
        }
        this.setState({
            userInfo:Object.assign(this.state.userInfo,{
                name:nameValue?nameValue:name,
                email:emailValue?emailValue:email,
                content:contentValue?contentValue:content,
                isSave:saveValue===undefined?isSave:saveValue
            })
        })
    }
    submitForm = () =>{
        const {name,email,content,isSave} = this.state.userInfo;
        if(name == ''){
            Toast.error("请输入昵称~");
            return false;
        }
        if(content == ''){
            Toast.error("请输入评论内容~");
            return false;
        }
        if(isSave){
            //存储用户信息
            tools.setStore('userinfo',JSON.stringify({
                name:escape(name),
                email:escape(email),
                isSave:true
            }))
        }else{
            tools.removeStore('userinfo')
        }
        
        //submit
        let params = {
            'petname': name,
            'email': email,
            'comcontent': content,
            'com_time': new Date(),
            'blog_id': this.props.blogId
        }

        Toast.loading('提交中...');  //加载中
        Fetch({
            url: api.comment_add,
            type: 'post',
            params:params
        }).then(res=>{
            if(res.data.code == 0){
                this.setState({
                    userInfo:Object.assign(this.state.userInfo,{
                        content:''
                    })
                },()=>{
                    this.props.updateComment();  //更新列表
                    Toast.success('提交成功~')
                })
            }else{
                Toast.error("提交失败~")
            }
        }).catch(error=>{
            Toast.error("提交失败~")
        })
    }
    getStoreInfo = ()=>{
        //获取缓存数据
        let storeUserInfo = tools.getStore('userinfo');
        if(storeUserInfo&& JSON.parse(storeUserInfo).name !=''){
            const {name,email,isSave} = JSON.parse(storeUserInfo);
            this.setState({
                userInfo:Object.assign(this.state.userInfo,{
                    name: unescape(name),
                    email: unescape(email),
                    isSave: isSave
                })
            })
        }
    }
    quoteReplay =(e) =>{
        //引用
        let reContent = e.currentTarget.getAttribute('data-content'),
            replayer = e.currentTarget.getAttribute('data-replayer');
        
        this.setState({
            userInfo: Object.assign(this.state.userInfo,{
                content: '回复：'+ replayer + ':' +reContent
            })
        })
    }

    render() {
        const {commentList,commentTotal} = this.props;
        return (
            <div className="comment-section">
                {
                    commentTotal ===0?'':(
                        <div className="comment-list">
                    <div className="cml-title">
                        最新评论 ({commentTotal})
                    </div>
                    {
                        commentList&&commentList.length>0?(
                            commentList.map((item,index)=>{
                                return (
                                    <div key={index} className="cml-cell">
                                        <div className="l-name">
                                        {/* tools.formatTime("yyyy-MM-dd hh:mm:ss",item.com_time) */}
                                            <span>{item.petname}</span><span className="l-date">{tools.dateFormat(item.com_time)}</span>
                                        </div>
                                        <div className="l-text">
                                            {item.comcontent}
                                        </div>
                                        <div className="l-quote">
                                            <a title={'引用 '+item.petname+' 的这条评论'} data-replayer={item.petname} data-content={item.comcontent} onClick={this.quoteReplay}>引用</a>
                                        </div>
                                    </div>
                                )
                            })
                        ):''
                    }
                </div>
                    )
                }
                
                <div className="comment-form">
                    <div className="cm-title">发表评论</div>
                    <div className="cm-name">
                        <input className="input" type="text" onChange={this.handleChange} maxLength="50" value={this.state.userInfo.name} placeholder="请输入昵称~" name="name" id="cName"/>
                        <div className="tips">昵称？那是必须的~</div>
                    </div>
                    <div className="cm-email">
                        <input className="input" type="email" onChange={this.handleChange} maxLength="50" value={this.state.userInfo.email} placeholder="请输入邮箱~"  name="email" id="cEmail"/>
                        <div className="tips">邮箱？看你咯~</div>
                    </div>
                    <div className="cm-content">
                        <textarea className="input textarea" name="content" placeholder="请输入评论内容~" value={this.state.userInfo.content}  onChange={this.handleChange} id="cContent" cols="30" rows="10"></textarea>
                    </div>
                    <div className="cm-isave">
                        <input type="checkbox" onChange={this.handleChange} checked={this.state.userInfo.isSave} name="save" id="cSave"/>
                        <label htmlFor="cSave">保存个人信息？</label>
                    </div>
                    <div className="cm-submit" onClick={this.submitForm}>提交</div>
                </div>
                <style jsx>
                {`
                    .comment-section {
                        width: 780px;
                        margin: 0 auto;
                        padding-bottom: .4rem;
                    }
                    
                    .comment-form {
                        width: 5rem;
                        padding-bottom: .3rem;
                        position: relative;
                    }
                    
                    .cm-title {
                        font-size: .18rem;
                        margin-top: .50rem;
                        margin-bottom: .20rem;
                        border-bottom: solid 1px #ccc;
                        padding-bottom: .04rem;
                    }
                    
                    .input {
                        border: solid 1px #ddd;
                        padding: .10rem;
                        border-radius: .02rem;
                        outline: none;
                        font-size: .14rem;
                        color: #333;
                        width: 2.2rem;
                        height: .36rem;
                        margin-bottom: .10rem;
                    }
                    
                    .textarea {
                        width: 100%;
                        resize: none;
                        height: 1.5rem;
                        margin-bottom: 0;
                    }
                    
                    .cm-submit {
                        border: solid 1px #ddd;
                        font-size: .15rem;
                        padding: .07rem .40rem;
                        display: inline-block;
                        cursor: pointer;
                        border-radius: .04rem;
                        background: #f1f1f1;
                        color: #999;
                        margin-top: .20rem;
                    }
                    
                    .cm-submit:hover {
                        color: #333;
                        background: transparent
                    }
                    
                    .cm-isave {
                        position: relative;
                        height: .15rem;
                        margin: .10rem 0;
                    }
                    
                    .cm-isave label {
                        font-size: .14rem;
                        line-height: .15rem;
                        color: #666;
                        cursor: pointer;
                        padding-left: .22rem;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    
                    .cm-isave label::before {
                        content: "";
                        display: block;
                        width: .15rem;
                        height: .15rem;
                        background: url('http://res.rdstour.com/static/images/dao/check_box_n.png') no-repeat;
                        background-size: .15rem;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    
                    .cm-isave input:checked+label {
                        background: url('http://res.rdstour.com/static/images/dao/check_box_p.png') no-repeat;
                        background-size: .15rem;
                    }
                    
                    .cm-isave input {
                        opacity: 0;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    
                    .tips {
                        display: inline-block;
                        font-size: .12rem;
                        color: #666;
                        margin-left: .15rem;
                        line-height: .36rem;
                    }
                    
                    .cm-sb-tips{
                        padding: .05rem .15rem;
                        font-size: .16rem;
                        position: absolute;
                        background: rgba(51, 51, 51, 0.25);
                        left: 2rem;
                        top: 2rem;
                        border-radius: .04rem;
                        color: #333;
                    }
                    .sk-three-bounce {
                        display: inline-block;
                        width: .40rem;
                        text-align: center; 
                    }
                    .sk-three-bounce .sk-child {
                        width: .08rem;
                        height: .08rem;
                        background-color: #666;
                        border-radius: 100%;
                        display: inline-block;
                        -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
                                animation: sk-three-bounce 1.4s ease-in-out 0s infinite both; 
                    }
                    .sk-three-bounce .sk-bounce1 {
                        -webkit-animation-delay: -0.32s;
                                animation-delay: -0.32s; 
                    }
                    .sk-three-bounce .sk-bounce2 {
                        -webkit-animation-delay: -0.16s;
                                animation-delay: -0.16s; 
                    }
                    
                    
                    /*list*/
                    .cml-title {
                        font-size: .18rem;
                        margin-bottom: .20rem;
                        border-bottom: solid 1px #ccc;
                        padding-bottom: .05rem;
                    }
                    
                    .cml-cell {
                        border-bottom: dashed 1px #ddd;
                        margin-bottom: .12rem;
                    }
                    
                    .l-name {
                        font-weight: 700;
                        font-size: .15rem;
                    }
                    
                    .l-name .l-date {
                        font-size: .12rem;
                        font-weight: normal;
                        color: #999;
                        padding-left: .1rem;
                    }
                    
                    .l-text {
                        font-size: .14rem;
                        color: #333;
                        word-wrap: break-word;
                        line-height: 1.5;
                        margin: .05rem 0 .10rem;
                    }
                    
                    .l-quote {
                        font-size: .12rem;
                        padding-bottom: .05rem;
                        text-align: right;
                    }
                    
                    .l-quote a {
                        cursor: pointer;
                    }
                    
                    
                    @-webkit-keyframes sk-three-bounce {
                        0%, 80%, 100% {
                          -webkit-transform: scale(0);
                                  transform: scale(0); }
                        40% {
                          -webkit-transform: scale(1);
                                  transform: scale(1); } }
                      
                      @keyframes sk-three-bounce {
                        0%, 80%, 100% {
                          -webkit-transform: scale(0);
                                  transform: scale(0); }
                        40% {
                          -webkit-transform: scale(1);
                                  transform: scale(1); } }
                `}
                </style>
            </div>
        )
    }
}
