import React, { Component } from 'react'
const QRCode = require('qrcode.react');



export default class PageShare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQRCode: false,
            currentUrl:''
        }
        
    }
    shareweibo = (title, url, picurl) => {
        var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picurl;
        window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
    }
    sharetoqqzone = (title, url, picurl) => {
        var shareqqzonestring = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + title + '&url=' + url + '&pics=' + picurl;
        window.open(shareqqzonestring, 'newwindow', 'height=400,width=400,top=100,left=100');
    }
    sharewxcode = () => {
        this.setState({
            currentUrl: window.location.href
        },()=>{
            this.setState({
                isQRCode: true
            })
        })
    }
    sharewxcodeHide =() =>{
        this.setState({
            isQRCode: false
        })
    }
    render() {
        return (
            <div className="share-section">
                {/* <div className="s-btn s-weibo" onClick={this.shareweibo}></div> */}
                {/* <div className="s-btn s-qq" onClick={this.sharetoqqzone}></div> */}
                <div className="s-btn s-wx" onMouseOver={this.sharewxcode} onMouseLeave={this.sharewxcodeHide}>
                    
                    {
                        this.state.isQRCode ? <div className="s-qrcode"><div className="arrow"></div><QRCode size={120} value={this.state.currentUrl} bgColor='#fff' fgColor='#333' level='Q' /></div> : ''
                    }
                </div>
                <style jsx>
                {`
                .share-section {
                    /* position: fixed;
                    top: 50%;
                    right: 120px; */
                }
                
                .s-btn {
                    width: .40rem;
                    height: .40rem;
                    padding: .02rem .1rem;
                    box-sizing: content-box;
                    font-size: .14rem;
                    color: #ccc;
                    cursor: pointer;
                }
                
                .s-btn:hover {
                    color: #333;
                }
                
                .s-weibo {
                    background: url('http://res.rdstour.com/static/images/dao/wb-icon.png') no-repeat;
                    background-size: .30rem;
                }
                
                .s-weibo:hover {
                    background: url('http://res.rdstour.com/static/images/dao/wb-icon-hover.png') no-repeat;
                    background-size: .30rem;
                }
                
                .s-qq {}
                
                .s-wx {
                    position: relative;
                    background: url('http://res.rdstour.com/static/images/dao/wx-icon.png') no-repeat;
                    background-size: .40rem;
                }
                
                .s-wx:hover {
                    background: url('http://res.rdstour.com/static/images/dao/wx-icon-hover.png') no-repeat;
                    background-size: .40rem;
                }
                
                .s-qrcode {
                    position: absolute;
                    top: -.15rem;
                    left: .50rem;
                    background: #fff;
                    border: solid 1px #ddd;
                    padding: .15rem;
                    border-radius: .06rem;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
                }
                
                .s-qrcode .arrow {
                    top: 20%;
                    border-width: 11px;
                    position: absolute;
                    display: block;
                    width: 0;
                    height: 0;
                    border-color: transparent;
                    border-style: solid;
                    left: -11px;
                    margin-top: -11px;
                    border-left-width: 0;
                    border-right-color: #999;
                    border-right-color: rgba(0, 0, 0, 0.25);
                }
                
                .s-qrcode .arrow:after {
                    content: " ";
                    left: 1px;
                    bottom: -10px;
                    border-width: 10px;
                    position: absolute;
                    display: block;
                    width: 0;
                    height: 0;
                    border-color: transparent;
                    border-style: solid;
                    border-left-width: 0;
                    border-right-color: #fff;
                }
                `}
                </style>
            </div>
        )
    }
}
