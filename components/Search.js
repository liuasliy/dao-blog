import React, { Component } from 'react'

import Router from 'next/router';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyShow: false,
            sValue: '',       //搜索词
        }
    }
    onFocusBind =(e) =>{
        if(e.target.value == ''){return}
        this.setState({
            keyShow: true
        })
    }
    onChangeBind = (e) => {
        let value = e.target.value;
        // if(value == ''){return}
        this.setState({
            sValue: e.target.value,
            keyShow: true
        })
    }
    onChangeEnter =(e)=>{
        if(e.charCode === 13 && e.key==='Enter'){
            this.searchBtn()
        }
    }
    wordsMove = (e) => {
        let keyWords = e.currentTarget.innerText;
        this.setState({
            sValue: keyWords
        })
    }
    selectHotWords = (e) => {
        let keyWords = e.currentTarget.innerText;
        this.setState({
            sValue: keyWords,
            keyShow: false
        })
    }
    searchBtn = () =>{
        Router.push('/result/'+this.state.sValue);
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        // let key = nextProps.match.params.sValue;
        // this.setState({
        //     sValue: key
        // })
    }
    render() {
        return (
            <div className={this.state.keyShow ? 'main-search show-hot' : 'main-search'}>
                <input type="text"
                    autoComplete="off"
                    name="search"
                    id="Search"
                    onChange={this.onChangeBind}
                    onFocus={this.onFocusBind}
                    onBlur={() => { this.setState({ keyShow: false }) }}
                    onKeyPress={this.onChangeEnter}
                    value={this.state.sValue}
                    placeholder="搜索" />
                <img className="icon-search" onClick={this.searchBtn} src="http://res.rdstour.com/static/images/dao/icon-search.png" alt=""/>
                {/* <ul className="hot-words">
                    <li onMouseOver={this.wordsMove} onClick={this.selectHotWords} className="hot-words-li">crea</li>
                    <li onMouseOver={this.wordsMove} onClick={this.selectHotWords} className="hot-words-li">零售云</li>
                    <li onMouseOver={this.wordsMove} onClick={this.selectHotWords} className="hot-words-li">零售云店员</li>
                    <li onMouseOver={this.wordsMove} onClick={this.selectHotWords} className="hot-words-li">零售云商城</li>
                    <li onMouseOver={this.wordsMove} onClick={this.selectHotWords} className="hot-words-li">零售云金掌柜</li>
                </ul> */}
                <style jsx>
                {`
                .main-search {
                    position: relative;
                }
                
                .main-search input[type='text'] {
                    width: 5rem;
                    padding: .10rem;
                    border-radius: .06rem;
                    border: solid 0px #fff;
                    font-size: .16rem;
                    background: #fdfdfc;
                    outline: none;
                    box-shadow: inset 0 0 1px #aaa;
                    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
                }
                
                .icon-search {
                    width: .25rem;
                    height: .25rem;
                    position: absolute;
                    right: .10rem;
                    top: .08rem;
                    cursor: pointer;
                }
                
                .show-hot input[type='text'] {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
                
                .show-hot .hot-words {
                    display: block
                }
                
                .hot-words {
                    display: none;
                    width: 5rem;
                    position: absolute;
                    top: .40rem;
                    left: 0;
                    z-index: 999;
                    border: solid 1px #ddd;
                    border-top: none;
                    background: #fff;
                    /* padding: .06rem 0; */
                    border-bottom-left-radius: .06rem;
                    border-bottom-right-radius: .06rem;
                }
                
                .hot-words-li {
                    line-height: .26rem;
                    cursor: pointer;
                    font-size: .14rem;
                    padding-left: .10rem;
                }
                
                .hot-words-li:hover {
                    background: #f1f1f1;
                }
                `}
                </style>
            </div>
        )
    }
}
