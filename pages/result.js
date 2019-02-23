import React, { Component } from 'react'
import Router from 'next/router';
import Layout from '../components/Layout';

import { api } from '../utils/api';
import fetch from 'isomorphic-unfetch';
import * as tools from '../utils/tools';

export default class Result extends Component {
    router = (e) => {
        Router.push(e.currentTarget.getAttribute('data-url'));
    }
    render() {
        return (
            <div>
                <Layout keywords={this.props.keywords}>
                    <div className="d-home">
                        <div className="d-wrap">
                            <div className="search-title clearfix">
                                <div className="result-count">
                                    搜索 <span className="term">"{this.props.keywords}"</span>    共有 {this.props.listData.length} 条相关结果
                                </div>
                            </div>
                            {
                                this.props.listData.length > 0 ? (<div>
                                    {this.props.listData.map((item, index) => {
                                    return (
                                        <div className="rds-result" key={index} >
                                            <div className="res-topic">
                                                <a className="res-title" data-url={'/article/detail/' + item.id} onClick={this.router}> {item.title}</a>
                                                <div className="search-category">
                                                    <a data-url={'/tags/' + item.tags[0]} onClick={this.router}><span className="badge-category-bg"></span>{item.tags[0]}</a>
                                                </div>
                                            </div>
                                            <div className="res-container">
                                                <span className="res-date">
                                                    {tools.formatTime(item.pubdate, 'YY-MM')} -
                                                </span>
                                                <span className="res-view">
                                                    {item.brief}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                                   <h3 className="search-footer">
                                        没有找到更多结果。
                                    </h3> 
                                </div>) 
                                : <h3 className="search-footer">没有找到结果。</h3>
                            }
                        </div>
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
                .search-title{
                    position: relative;
                    margin: 10px 0 15px;
                    border-bottom: 3px solid #e9e9e9;
                    width: 100%;
                }
                .result-count{
                    margin-bottom: 4px;
                }
                .term{
                    font-weight: bold;
                }
                .rds-result{
                    margin-bottom: 28px;
                    max-width: 780px;
                }
                .res-topic{
                    padding-bottom: 2px;
                    max-width: 700px;
                }
                .res-title{
                    font-size: .18rem;
                    line-height: 22px;
                    text-decoration: none;
                    color: #333;;
                    cursor: pointer;
                }
                .res-title:hover{
                    color: #08c;
                }
                .search-category{
                    color: #222;
                    padding-top: 5px;
                }
                .search-category a{
                    cursor: pointer;
                    color: #222;
                    text-decoration: none;
                    font-size: .12rem;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                }
                .badge-category-bg{
                    display: inline-block;
                    padding: 1px;
                    background-color: #B3B5B4;
                    margin-right: .05rem;
                }
                .badge-category-bg:before{
                    content: "";
                    width: 3px;
                    height: 12px;
                    background: #B3B5B4;
                    display: block;
                }
                .res-container{
                    font-size: .14rem;
                    line-height: 20px;
                    word-wrap: break-word;
                    max-width: 640px;
                    color: #7a7a7a;
                }
                .res-date{
                    color: #a7a7a7;
                    white-space: nowrap;
                }
                .res-view{
                    font-size: .14rem;
                    line-height: 20px;
                    word-wrap: break-word;
                    max-width: 640px;
                    color: #7a7a7a;
                }
                .search-footer{
                    margin-bottom: 30px;
                    font-size: .17rem;
                    font-family: Helvetica,Arial,sans-serif;
                    direction: ltr;
                    color: #222;
                }
                `}
                    </style>
                </Layout>
            </div>
        )
    }
}

Result.getInitialProps = async function (context) {
    const { asPath } = context;
    let idArr = asPath.split('/');
    let keywords = asPath.split('/')[idArr.length - 1];
    const res = await fetch(api.blog_search + '?title=' + keywords);
    const data = await res.json();
    if (data.code == '0') {
        let listData = data.data.list;
        keywords = decodeURIComponent(keywords);
        return { listData, keywords }
    }

}