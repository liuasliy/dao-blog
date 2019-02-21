import React from 'react';

import Link from 'next/link';
import Layout from '../components/Layout';
import LoadMore from '../components/LoadMore';

import Fetch from '../utils/axios';
import { api } from '../utils/api'
import fetch from 'isomorphic-unfetch';
import * as tools from '../utils/tools';

class Index extends React.Component {
    state = {
        newListData:[],
        _page: 1,
        isLoadingMore: false,
        // totalPage: 0,
        isComplete: false
    }
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        })
        this.resultHandle()
    }
    resultHandle() {
        //是否需要服务器渲染 
        const page = this.state._page
        this.setState({
            _page: page + 1
        }, () => {
            
            if (this.state._page > this.props.totalPage) {
                this.setState({
                    isLoadingMore: false,
                    isComplete: true
                })
                return false;
            }
            else {
                //加载更多数据
                Fetch({
                    url: api.blog_list + `?page_size=10&page=${this.state._page}`,
                    type: 'get',
                }).then(res => {
                    const { code, data } = res.data;
                    if (code === '0') {
                        // debugger
                        
                        //this.props.listData = this.props.listData.concat(data.list)
                        this.setState({
                            newListData: this.props.listData.concat(data.list),
                            isLoadingMore: false
                        })
                    }

                })
                    .catch(error => {
                        console.log('error: ' + error)
                    })
            }
        })


    }
    render() {
        let {listData =[]} = this.props;
        if(this.state.newListData.length >0){
            listData = this.state.newListData;
        }
        
        return (
            <Layout>
                <div className="d-home">
                    <div className="d-wrap">
                        {
                           listData.map((item, indexs) => {
                                return <article key={item.id}>
                                    <h3 className="d-title">
                                        <Link as={`/article/detail/${item.id}`} href={`/detail?id=${item.id}`}>
                                            <a><span>{item.title}</span></a>
                                        </Link>
                                    </h3>
                                    <div className="d-content">
                                        {item.brief}
                                    </div>
                                    <div className="d-intro">
                                        <span className="d-date">{tools.formatTime(item.pubdate)}</span>
                                        <span className="d-tags">
                                            {
                                                item.tags.map((items, index) => {
                                                    return(
                                                        <Link key={index} as={`/article/tag/${items.id}`} href={`/tag?id=${items.id}`}>
                                                            <a >{items}</a>
                                                        </Link>
                                                    )
                                                    
                                                })
                                            }
                                        </span>
                                        <span className="d-view-num">阅读:{item.read_count}</span>
                                    </div>
                                </article>
                            })
                        }
                        {
                            this.state.isComplete ? <div className="load-more">已经没有更多数据啦~</div> : <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
                        }

                    </div>
                    <style jsx>
                        {`
                body {
                    background-color: #f7f7f7;
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
                
                article {
                    margin-bottom: 1.2rem;
                    position: relative;
                }
                
                article::after {
                    content: "";
                    display: block;
                    width: 50%;
                    margin: 0 auto;
                    height: 1px;
                    background: #ddd;
                    position: absolute;
                    bottom: -.6rem;
                    left: 0;
                    right: 0;
                }
                
                article:last-child::after {
                    height: 0;
                }
                
                .d-title {
                    font-weight: normal;
                    font-size: .32rem;
                    margin: 0;
                    padding: 0;
                    margin-bottom: .2rem;
                }
                
                .d-title a {
                    color: #333;
                    text-decoration: none;
                    cursor: pointer;
                }
                
                .d-title a span {
                    padding-bottom: 3px;
                    -webkit-transition: 0.15s;
                    transition: 0.15s;
                    box-shadow: inset 0 -2px 0 rgba(63, 81, 181, 0);
                }
                
                .d-title a:hover span {
                    box-shadow: inset 0 -2px 0 rgba(63, 81, 181, 0.6);
                }
                
                .d-content {
                    font-size: .16rem;
                    line-height: .26rem;
                    margin-bottom: .15rem;
                }
                
                .d-intro {
                    display: flex;
                    align-items: center;
                    font-size: .14rem;
                    color: #666;
                }
                
                .d-date {}
                
                .d-tags {
                    flex: 1;
                    margin-left: .15rem;
                    position: relative;
                    padding-left: .25rem;
                }
                
                .d-tags a {
                    display: inline-block;
                    cursor: pointer;
                    color: #666;
                }
                
                .d-tags a:hover {
                    color: #000
                }
                
                .d-tags a+a:before {
                    content: "/";
                    margin: 0 .05rem;
                }
                
                .d-tags::before {
                    content: "";
                    display: block;
                    width: .20rem;
                    height: .20rem;
                    background: url('http://res.rdstour.com/static/images/dao/icon-tag.png') no-repeat;
                    background-size: .20rem .20rem;
                    position: absolute;
                    left: 0;
                    top: .01rem;
                }
                
                .d-view-num {
                    position: relative;
                    padding-left: .25rem;
                }
                
                .d-view-num::before {
                    content: "";
                    display: block;
                    width: .20rem;
                    height: .20rem;
                    background: url('http://res.rdstour.com/static/images/dao/icon-view.png') no-repeat;
                    background-size: .20rem .20rem;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                
                .load-more {
                    text-align: center;
                    padding: 10px 0px;
                    background-color: #fff;
                    color: #999;
                    font-size: .16rem;
                }
                `}
                    </style>
                </div>

            </Layout>
        )
    }
}




Index.getInitialProps = async function () {
    const res = await fetch(api.blog_list+`?page_size=10&page=${1}`);
    const data = await res.json();
    console.log(data.data)
    if(data.code === '0'){
        return {
            listData: data.data.list,
            totalPage: data.data.totalPage
        }
    }
}

export default Index;