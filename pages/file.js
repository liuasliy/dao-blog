import React, { Component } from 'react'

import Layout from '../components/Layout';

export default class File extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className="d-home">
                        <div className="d-wrap">
                            <h3 className="tags-title">归档</h3>
                            <div className="tags-list">
                                <div className="tags-cell">
                                    2018
                                </div>
                                <div className="tags-cell">
                                2017
                                </div>
                                <div className="tags-cell">
                                2016
                                </div>
                            </div>
                        </div>
                        <style jsx>
                        {`
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
                                font-size: .16rem;
                                position: relative;
                                padding-left: .15rem;
                                cursor: pointer;
                            }
                            
                            .tags-cell:before {
                                content: "";
                                width: 4px;
                                height: 4px;
                                background: #333;
                                border-radius: 50%;
                                display: block;
                                position: absolute;
                                left: 0;
                                top: 50%;
                                margin-top: -2px;
                            }
                            
                            .tags-cell .date {
                                padding-left: .30rem;
                            }
                        `}
                        </style>
                    </div>
                </Layout>
            </div>
        )
    }
}
