import React, { Component } from 'react'

import store from './store'

import ButtonActions from './ButtonActions'

class ViewController extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: store.getCount()
    }
  }

  changeCount() {
    ButtonActions.addCount()

    this.setState({
      count: store.getCount()
    })
  }

  render() {
    return (
      <div>
        <span style={{padding: '0 20px'}}>{this.state.count}</span>
        <button onClick={this.changeCount.bind(this)}> + </button>
      </div>
    )
  }
}

export default ViewController
