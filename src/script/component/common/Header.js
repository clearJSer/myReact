import React,{Component,ProTypes}  from 'react'

class Header extends Component{
	render(){
	   return(
	      <div className="header-box">
		  	<div id="" className="logo">
		  		<a href="#"><img src={require('../../../images/cmbc.jpg')} width="180px" height="60px"/></a>
		  	</div>  
		  	<div className = "sys-name">集中运营平台</div>
		  	<ul className="header-tab">
		  		<li><a href="">通知消息</a></li>
		  		<li><a href="">任务消息</a></li>
		  		<li><a href="">签退</a></li>
		  	</ul>
	      </div>
	   )
	}
}

export default Header