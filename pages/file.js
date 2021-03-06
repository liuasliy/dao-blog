import React, { Component } from 'react'
import Router from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';

import { api } from '../utils/api'
import fetch from 'isomorphic-unfetch';
import * as tools from '../utils/tools';

export default class File extends Component {
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
                            <h1>文章存档</h1>
                            <div className="archives">
                                {
                                    this.props.listData.map((item,index)=>{
                                        return(
                                            <div key={index}>
                                                <h2>{item.year_name}</h2>
                                                <ul>
                                                    {
                                                        item.blog_list.map((items,eindex)=>{
                                                            return(
                                                                <Link key={eindex} as={`/article/detail/${items.id}`} href={`/detail?id=${items.id}`}>
                                                                    <li ><span className="arc-date">{tools.formatTime(items.pubdate,'MM/DD')}</span><a href="">{items.title}</a><span className="arc-view">{items.read_count}次浏览</span></li>
                                                                </Link>
                                                                
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
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
                            margin-bottom: 10px;
                            padding: 4px 0;
                            border-bottom: 1px dashed #ccc;
                        }
                        .file-archives ul{
                            margin-bottom: .1rem;
                            margin-left: 20px;
                        }
                        .file-archives li {
                            position: relative;
                            display: list-item;
                            text-align: -webkit-match-parent;
                        }
                        .file-archives li:before{
                            content: "";
                            width: 4px;
                            height: 4px;
                            border-radius: 50%;
                            background: #333;
                            display: block;
                            position: absolute;
                            left: -12px;
                            top: 50%;
                            margin-top: -2px;
                        }
                        .file-archives li a{
                            padding: 0 2px;
                            text-decoration: none;
                            color: #333;
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


File.getInitialProps = async function () {
    const res = await fetch(api.blog_file);
    const data = await res.json();
    if(data.code === '0'){
        return {
            listData: data.data.list
        }
    }
}