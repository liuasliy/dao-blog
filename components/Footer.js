import React, { Component } from 'react';


export default class Footer extends Component {
    router = (e) => {
        window.open(e.currentTarget.getAttribute('data-url'), '_blank')
    }
    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="f-left">
                        {/* <img className="f-logo" src={Logo} alt=""/> */}
                    </div>
                    <div className="f-mid">
                        <p>刀客技术栈</p>
                        <p>Copyright © 2017 daoblog. All Rights Reserved. </p>
                    </div>
                    <div className='f-right'>
                        <img className="f-icon" data-url="http://weibo.com/asliy" onClick={this.router} src="http://res.rdstour.com/static/images/dao/weibo.png" alt="Weibo" />
                        <img className="f-icon" data-url="http://wpa.qq.com/msgrd?v=3&amp;uin=945665033&amp;site=qq&amp;menu=yes" onClick={this.router} src="http://res.rdstour.com/static/images/dao/QQ.png" alt="QQ" />
                        <img className="f-icon" data-url="https://github.com/liuasliy" onClick={this.router} src="http://res.rdstour.com/static/images/dao/github.png" alt="Github" />
                    </div>
                </div>
                <style jsx>
                    {`
                footer {
                    width: 100%;
                    height: 1rem;
                    background: #fff;
                    position: relative;
                    z-index: 1999;
                    box-shadow: 0px -1px 5px 1px rgba(221, 221, 221, 0.4)
                }
                
                .footer {
                    max-width: 1170px;
                    margin: 0 auto;
                    height: 1rem;
                    display: flex;
                    align-items: center;
                }
                
                .f-left {
                    width: 20%;
                }
                
                .f-logo {
                    width: .57rem;
                    height: .57rem;
                    display: block;
                    margin: 0 auto;
                }
                
                .f-mid {
                    font-size: .14rem;
                    color: rgba(102, 102, 102, 0.8);
                    text-align: center;
                    width: 60%;
                    flex: 1
                }
                
                .f-right {
                    width: 20%;
                    text-align: center;
                }
                
                .f-icon {
                    width: .28rem;
                    height: .28rem;
                    margin: 0 .05rem;
                    cursor: pointer;
                    display: inline-block;
                }
                
                .f-icon:hover {
                    opacity: .8;
                }
            `}
                </style>
            </footer>
        )
    }
}
