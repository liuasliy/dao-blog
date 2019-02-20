import React, { Component } from 'react';
import Link from 'next/link';

import Search from "./Search";

// const Header = () => (
//     <div>
//         <Link href="/">
//             <a style={linkStyle}>Home</a>
//         </Link>
//         <Link href="/about">
//             <a style={linkStyle}>About</a>
//         </Link>
//     </div>
// )

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
          isShow:false,    //是否显示下拉导航
          navData:[
            {name:'归档',linkUrl:'/home'},
            {name:'标签',linkUrl:'/homes'}
            ]
        }
        // document.addEventListener('click',this.clickHidden)
      }
     
    //   componentWillUnmount(){
    //     document.removeEventListener('click',this.clickHidden)
    //   }
      clickHidden =() =>{
        this.setState({
          isShow:false
        })
      }
      showNav = () => {
        this.setState({
          isShow:true
        })
      }
      router =(e) =>{
        this.context.router.history.push(e.currentTarget.getAttribute('data-url'));
      }
    render() {
        return (
            <header>
                <div className="header">
                    <div className="logo"><img src="http://res.rdstour.com/static/images/dao/logo.png" alt="" /></div>
                    <div className="web-name"><img src="http://res.rdstour.com/static/images/dao/logotext.png" alt="" /></div>
                    <div className="top-search">
                        <Search />
                    </div>
                    <div className="top-nav">
                        <span onClick={this.showNav}>首页</span>
                        <ul className={this.state.isShow ? 'nav-second show' : 'nav-second'}>
                            {
                                this.state.navData.map((item, index) => {
                                    return (<li key={index} data-url={item.linkUrl} onClick={this.router}>{item.name}</li>)
                                })
                            }
                        </ul>
                    </div>
                </div>

                <style jsx>
                {`
                header {
                    width: 100%;
                    background: #fff;
                    height: .8rem;
                    display: flex;
                    align-items: center;
                    padding: 0 .50rem;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 9999;
                    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);
                }
                
                .header {
                    width: 1170px;
                    height: .80rem;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                }
                
                .logo img {
                    width: .57rem;
                    height: .57rem;
                }
                
                .logo {
                    margin-right: .15rem;
                }
                
                .top-nav {
                    margin-left: .15rem;
                    position: relative;
                    width: .6rem;
                    text-align: center;
                    font-size: .22rem;
                }
                
                .web-name {
                    flex: 1;
                    font-size: .36rem;
                }
                
                .web-name img {
                    width: 2.28rem;
                    height: .41rem;
                }
                
                .top-nav span {
                    cursor: pointer;
                    width: .6rem;
                    height: .80rem;
                    font-size: .18rem;
                }
                
                .nav-second {
                    width: 1.20rem;
                    position: absolute;
                    top: .55rem;
                    right: 0;
                    background: #fff;
                    border: solid 1px #e1e1e1;
                    border-top: none;
                    padding: .05rem 0;
                    opacity: 0;
                }
                
                .show {
                    visibility: visible;
                    opacity: 1;
                    animation: 1s ease backwards;
                    animation-name: flipinY;
                }
                
                .nav-second li {
                    font-size: .16rem;
                    text-align: center;
                    line-height: .38rem;
                    cursor: pointer;
                }
                
                .nav-second li+li::before {
                    content: "";
                    width: 40%;
                    height: 1px;
                    margin: 0 auto;
                    background: #e1e1e1;
                    display: block;
                }
                
                
                /* 翻入-Y轴 */
                
                @-webkit-keyframes flipinY {
                    0% {
                        -webkit-transform: perspective(400px) rotateY(90deg);
                        opacity: 0;
                    }
                    40% {
                        -webkit-transform: perspective(400px) rotateY(-10deg);
                    }
                    70% {
                        -webkit-transform: perspective(400px) rotateY(10deg);
                    }
                    100% {
                        -webkit-transform: perspective(400px) rotateY(0);
                        opacity: 1;
                    }
                }
                
                @-moz-keyframes flipinY {
                    0% {
                        -moz-transform: perspective(400px) rotateY(90deg);
                        opacity: 0;
                    }
                    40% {
                        -moz-transform: perspective(400px) rotateY(-10deg);
                    }
                    70% {
                        -moz-transform: perspective(400px) rotateY(10deg);
                    }
                    100% {
                        -moz-transform: perspective(400px) rotateY(0);
                        opacity: 1;
                    }
                }
                
                @-ms-keyframes flipinY {
                    0% {
                        -ms-transform: perspective(400px) rotateY(90deg);
                        opacity: 0;
                    }
                    40% {
                        -ms-transform: perspective(400px) rotateY(-10deg);
                    }
                    70% {
                        -ms-transform: perspective(400px) rotateY(10deg);
                    }
                    100% {
                        -ms-transform: perspective(400px) rotateY(0);
                        opacity: 1;
                    }
                }
                
                @keyframes flipinY {
                    0% {
                        transform: perspective(400px) rotateY(90deg);
                        opacity: 0;
                    }
                    40% {
                        transform: perspective(400px) rotateY(-10deg);
                    }
                    70% {
                        transform: perspective(400px) rotateY(10deg);
                    }
                    100% {
                        transform: perspective(400px) rotateY(0);
                        opacity: 1;
                    }
                }
                
                
                /* 翻出-Y轴 */
                
                @-webkit-keyframes flipoutY {
                    0% {
                        -webkit-transform: perspective(400px) rotateY(0);
                        opacity: 1;
                    }
                    100% {
                        -webkit-transform: perspective(400px) rotateY(90deg);
                        opacity: 0;
                    }
                }
                
                @-moz-keyframes flipoutY {
                    0% {
                        -moz-transform: perspective(400px) rotateY(0);
                        opacity: 1;
                    }
                    100% {
                        -moz-transform: perspective(400px) rotateY(90deg);
                        opacity: 0;
                    }
                }
                
                @-ms-keyframes flipoutY {
                    0% {
                        -ms-transform: perspective(400px) rotateY(0);
                        opacity: 1;
                    }
                    100% {
                        -ms-transform: perspective(400px) rotateY(90deg);
                        opacity: 0;
                    }
                }
                
                @keyframes flipoutY {
                    0% {
                        transform: perspective(400px) rotateY(0);
                        opacity: 1;
                    }
                    100% {
                        transform: perspective(400px) rotateY(90deg);
                        opacity: 0;
                    }
                }
                `}
                </style>
            </header>
        )
    }
}