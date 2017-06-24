import React, { Component } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';

 class MyButton extends Component {
  render() {
  	let items = this.props.items
  	let itemHTML = items.map((value,index)=>{
	    return (
	  		<li key={index}>{value}<Button style={{float:'right'}} type="primary" onClick={this.props.onRemoveHandler.bind(null, index)}>X</Button></li>
	  	)
    })
  	
  	return(
      <div className="tdlBox">
      		<div>===============To Do List===============</div>
			<div><Input ref="input" type="text" onKeyUp={this.props.onEnterHandler} /></div>	
			<ul>
			 	{itemHTML}
			</ul>
      </div>
    )
  }
}
 export default MyButton
