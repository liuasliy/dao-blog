import React,{Component} from 'react'

class LoadMore extends Component{

	render(){
		return (
				<div className="load-more" ref="wrapper">
					{
						this.props.isLoadingMore
						? <span>加载中...</span>
						: <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                    }
                    <style jsx>
                    {`
                    .load-more{
                        text-align: center;
                        padding: 10px 0px;
                        background-color: #fff;
                        color: #999;
                    }
                    `}
                    </style>
				</div>
			)
	}
	componentDidMount(){

		const wrapper = this.refs.wrapper
		const loadMoreFn = this.props.loadMoreFn

		function callback(){
			const top = wrapper.getBoundingClientRect().top
			const windowHeight = window.screen.height

			if(top && top < windowHeight){
				loadMoreFn()
			}
		}

		//滚动事件
		let timeAction;
		window.addEventListener('scroll',()=>{
			if(this.props.isLoadingMore){
				return;
			}

			if(timeAction){
				clearTimeout(timeAction);
			}

			timeAction = setTimeout(callback,150);
		});
	}
	loadMoreHandle(){
		this.props.loadMoreFn();
	}
}

export default LoadMore