import React, { Component } from 'react'
import Router from 'next/router';
import Layout from '../components/Layout';

import { api } from '../utils/api';
import fetch from 'isomorphic-unfetch';
import * as tools from '../utils/tools';

export default class Tag extends Component {
    router = (e) => {
        Router.push(e.currentTarget.getAttribute('data-url'));
    }
    render() {
        return (
            <div>
                <Layout>
                    <div className="d-home">
                        <div className="d-wrap">
                            <h3 className="tags-title">{this.props.tagname}</h3>
                            <div className="tags-list">
                                {
                                    this.props.listData.map((item,index)=>{
                                        return <div key={index} className="tags-cell" data-url={'/article/detail/'+item.id} onClick={this.router}>
                                            <span className="date">{tools.formatTime(item.pubdate,'YY-MM-DD')}</span>{item.title}
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Layout>
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
                .tags-title {
                    font-size: .24rem;
                    font-weight: normal;
                    text-align: center;
                    position: relative;
                    height: .38rem;
                    margin-bottom: .30rem;
                }
                
                .tags-title::after {
                    content: "";
                    width: .6rem;
                    height: 1px;
                    background: #ccc;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    margin-left: -.30rem;
                }
                
                .tags-cell {
                    line-height: .28rem;
                    font-size: .18rem;
                    position: relative;
                    /* padding-left: .15rem; */
                    cursor: pointer;
                    color: #34495e;
                    flex: 1 1 auto;
                    margin: 0;
                    padding: .15rem;
                }
                
                .tags-cell+.tags-cell {
                    border-top: 1px solid #f8f8f8;
                }
                
                .tags-cell:hover {
                    color: #333;
                }
                
                .tags-cell .date {
                    color: #03a9f4;
                    font-size: .18rem;
                    margin-right: .10rem;
                }
                `}
                </style>
            </div>
        )
    }
}

Tag.getInitialProps = async function (context) {
    const { asPath } = context;
    let idArr = asPath.split('/');
    let tagname = asPath.split('/')[idArr.length - 1];
    const res = await fetch(api.tag_blog_list+'?tag='+ tagname);
    const data = await res.json();
    if (data.code == '0') {
        let listData = data.data.list;
        tagname = decodeURIComponent(tagname);
        return { listData,  tagname}
    }

}