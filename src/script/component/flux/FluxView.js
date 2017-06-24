import React, { Component } from 'react'
import store from './store'
import ButtonAction from './ButtonAction'

class FluxView extends Component {
	
  constructor(props) {
    super(props)
    this.state={
    	count:store.getCount()
    }
  }
 
  changeCount(){
  	ButtonAction.addCount();
  	
  	this.setState({
  		count:store.getCount()
  	})
  }

  render() {
    return (
      <div style={{margin:'20px'}}>
        <span style={{padding: '0 20px'}}>{this.state.count}</span>
        <button onClick={this.changeCount.bind(this)}> + </button>
      </div>
    )
  }
}

export default FluxView
