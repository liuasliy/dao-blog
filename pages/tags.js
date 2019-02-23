import React, { Component } from 'react'
import Router from 'next/router';
import Layout from '../components/Layout';

export default class Tags extends Component {
    router = (e) => {
        Router.push(e.currentTarget.getAttribute('data-url'));
    }
    render() {
        return (
            <div>
                <Layout>
                    <div className="d-home">
                        <div className="d-wrap">
                        <article className="file-archives">
                            <h1>标签页</h1>
                            <div className="letter-all clear">
                                <a href="#A">A</a>
                                <a className="disabled">B</a>
                                <a href="#C">C</a>
                                <a href="#D">D</a>
                                <a href="#E">E</a>
                                <a href="#F">F</a>
                                <a href="#G">G</a>
                                <a href="#H">H</a>
                                <a className="disabled">I</a>
                                <a href="#J">J</a>
                                <a href="#K">K</a>
                                <a href="#L">L</a>
                                <a href="#M">M</a>
                                <a href="#N">N</a>
                                <a className="disabled">O</a>
                                <a href="#P">P</a>
                                <a href="#Q">Q</a>
                                <a href="#R">R</a>
                                <a href="#S">S</a>
                                <a href="#T">T</a>
                                <a  className="disabled">U</a>
                                <a href="#V">V</a>
                                <a href="#W">W</a>
                                <a href="#X">X</a>
                                <a href="#Y">Y</a>
                                <a href="#Z">Z</a>
                            </div>
                            <div className="archives">
                                <h2 id="A">A</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/API'} onClick={this.router}>API</a></li>
                                </ul>
                                <h2 id="C">C</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/测试'} onClick={this.router}>测试</a></li>
                                    <li><a data-url={'/tag/Centos'} onClick={this.router}>Centos</a></li>
                                    <li><a data-url={'/tag/CSS'} onClick={this.router}>CSS</a></li>
                                    <li><a data-url={'/tag/Canvas'} onClick={this.router}>Canvas</a></li>
                                </ul>
                                <h2 id="D">D</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/Django'} onClick={this.router}>Django</a></li>
                                </ul>
                                <h2 id="E">E</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/ECMAScript'} onClick={this.router}>ECMAScript</a></li>
                                    <li><a data-url={'/tag/Express'} onClick={this.router}>Express</a></li>
                                    <li><a data-url={'/tag/ESLint'} onClick={this.router}>ESLint</a></li>
                                </ul>
                                <h2 id="F">F</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/翻译'} onClick={this.router}>翻译</a></li>
                                </ul>
                                <h2 id="G">G</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/GitHub'} onClick={this.router}>GitHub</a></li>
                                </ul>
                                <h2 id="H">H</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/后端'} onClick={this.router}>后端</a></li>
                                    <li><a data-url={'/tag/HTML'} onClick={this.router}>HTML</a></li>
                                    <li><a data-url={'/tag/HTTP'} onClick={this.router}>HTTP</a></li>
                                    <li><a data-url={'/tag/HTTPS'} onClick={this.router}>HTTPS</a></li>
                                </ul>
                                <h2 id="J">J</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/JavaScript'} onClick={this.router}>JavaScript</a></li>
                                    <li><a data-url={'/tag/架构'} onClick={this.router}>架构</a></li>
                                </ul>
                                <h2 id="K">K</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/Koa'} onClick={this.router}>Koa</a></li>
                                </ul>
                                <h2 id="L">L</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/Linux'} onClick={this.router}>Linux</a></li>
                                    <li><a data-url={'/tag/浏览器'} onClick={this.router}>浏览器</a></li>
                                </ul>
                                <h2 id="M">M</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/MySQL'} onClick={this.router}>MySQL</a></li>
                                    <li><a data-url={'/tag/MongoDB'} onClick={this.router}>MongoDB</a></li>
                                    <li><a data-url={'/tag/面试'} onClick={this.router}>面试</a></li>
                                </ul>
                                <h2 id="N">N</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/Next'} onClick={this.router}>Next.js</a></li>
                                    <li><a data-url={'/tag/Node'} onClick={this.router}>Node.js</a></li>
                                </ul>
                                <h2 id="P">P</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/Python'} onClick={this.router}>Python</a></li>
                                </ul>
                                <h2 id="Q">Q</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/前端'} onClick={this.router}>前端</a></li>
                                    <li><a data-url={'/tag/前端框架'} onClick={this.router}>前端框架</a></li>
                                </ul>
                                <h2 id="R">R</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/React'} onClick={this.router}>React.js</a></li>
                                </ul>
                                <h2 id="S">S</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/算法'} onClick={this.router}>算法</a></li>
                                </ul>
                                <h2 id="T">T</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/TypeScript'} onClick={this.router}>TypeScript</a></li>
                                </ul>
                                <h2 id="V">V</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/Vue'} onClick={this.router}>Vue.js</a></li>
                                </ul>
                                <h2 id="W">W</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/Webpack'} onClick={this.router}>Webpack</a></li>
                                    <li><a data-url={'/tag/微信小程序'} onClick={this.router}>微信小程序</a></li>
                                </ul>
                                <h2 id="X">X</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/性能优化'} onClick={this.router}>性能优化</a></li>
                                </ul>
                                <h2 id="Y">Y</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/源码'} onClick={this.router}>源码</a></li>
                                </ul>
                                <h2 id="Z">Z</h2>
                                <ul className="clear">
                                    <li><a data-url={'/tag/正则表达式'} onClick={this.router}>正则表达式</a></li>
                                </ul>
                            </div>
                        </article>
                        </div>
                        <style jsx>
                        {`
                        .clear:before,
                        .clear:after{
                            content: "";
                            display: table;
                        }
                        .clear:after{
                            clear: both;
                        }
                        .d-home {
                            max-width: 1170px;
                            margin: .8rem auto 0;
                            min-height: 100vh;
                            background: #fff;
                            padding-top: .50rem;
                        }
                        
                        .d-wrap {
                            width: 780px;
                            margin: 0 auto;
                            padding-bottom: .4rem;
                        }
                        .letter-all{
                            margin-bottom: .20rem;
                        }
                        .letter-all a{
                            float: left;
                            width: .30rem;
                            height: .30rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border: solid 1px #ddd;
                            margin-right: .10rem;
                            margin-bottom: .10rem;
                            border-radius: .04rem;
                            color:#333;
                        }
                        .letter-all .disabled{
                            color: #ccc;
                        }
                        .archives{
                            font-size: .14rem;
                            line-height: 1.9;
                        }
                        .file-archives h1{
                            font-weight: bold;
                            font-size: .18rem;
                            font-family: Pmingliu,Mingliu;
                            line-height: .1rem;
                            margin-bottom: 10px;
                            padding-bottom: 15px;
                        }
                        .file-archives h2{
                            color: #666;
                            font-size: .13rem;
                            font-weight: bold;
                            margin-bottom: 15px;
                            padding: 4px 0;
                            border-bottom: 1px dashed #ccc;
                        }
                        .file-archives ul{
                            margin-bottom: .15rem;
                            margin-left: 20px;
                        }
                        .file-archives li {
                            position: relative;
                            display: list-item;
                            text-align: -webkit-match-parent;            
                            float: left;
                        }
                        .file-archives li a{
                            cursor: pointer;
                            padding: .02rem .10rem;
                            -webkit-text-decoration: none;
                            text-decoration: none;
                            color: #333;
                            border: solid 1px #ddd;
                            border-radius: .16rem;
                            margin: .15rem;
                            margin-left: 0;
                        }
                        .file-archives li a:hover{
                            color: #08c;
                        }
                        .arc-date{
                            margin-right: 8px;
                            color: #666;
                            font-size: .13rem;
                        }
                        .arc-view{
                            color: #08c;
                            margin-left: 30px;
                        }
                        
                        `}
                        </style>
                    </div>
                </Layout>
            </div>
        )
    }
}
