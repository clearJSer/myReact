import React, { Component } from 'react'

import store from './store'

export default class Button extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: store.getState()
    }
  }

  createNewItem(event) {
    if (event.keyCode === 13) {
      let val = this.refs.input.value
      store.dispatch({
        type: 'ADD',
        payload: val
      })
      event.target.value = ''
         this.setState({
           items: store.getState()
         })
    }
  }

  removeItem(index) {
    store.dispatch({
      type: 'REMOVE',
      payload: index
    })
    this.setState({
           items: store.getState()
         })
  }

  render() {
    let items = this.state.items
    let itemHTML = items.map((value, index)=>{
      return (
        <li key={index}>{value} <button onClick={this.removeItem.bind(this, index)}>X</button></li>
      )
    })
    return (
      <div>
        <div>
          <input onKeyUp={this.createNewItem.bind(this)} ref="input" type="text"/>
        </div>
        <ul>
          {itemHTML}
        </ul>
      </div>
    )
  }
}
