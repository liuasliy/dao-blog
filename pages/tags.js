import React, { Component } from 'react'

import Layout from '../components/Layout';

export default class File extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className="d-home">
                        <div className="d-wrap">
                        <article className="file-archives">
                            <h1>标签页</h1>
                            <div className="letter-all clear">
                                <a href="">A</a>
                                <a href="">B</a>
                                <a href="">C</a>
                                <a href="">D</a>
                                <a href="">E</a>
                                <a href="">F</a>
                                <a href="">G</a>
                                <a href="">H</a>
                                <a className="disabled">I</a>
                                <a href="">J</a>
                                <a href="">K</a>
                                <a href="">L</a>
                                <a href="">M</a>
                                <a href="">N</a>
                                <a href="">O</a>
                                <a href="">P</a>
                                <a href="">Q</a>
                                <a href="">R</a>
                                <a href="">S</a>
                                <a href="">T</a>
                                <a href="">U</a>
                                <a href="">V</a>
                                <a href="">W</a>
                                <a href="">X</a>
                                <a href="">Y</a>
                                <a href="">Z</a>
                            </div>
                            <div className="archives">
                                <h2>A</h2>
                                <ul className="clear">
                                    <li><a href="">前端开发</a></li>
                                    <li><a href="">Node</a></li>
                                </ul>
                                <h2>B</h2>
                                <ul className="clear">
                                    <li><a href="">前端开发</a></li>
                                    <li><a href="">Node</a></li>
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
