import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    let items = this.props.items
    let itemHTML = items.map((value, index)=>{
      return (
        <li key={index}>{value} <button onClick={this.props.onRemoveHandler.bind(null, index)}>X</button></li>
      )
    })
    return (
      <div>
        <div>
          <input ref="input" onKeyUp={this.props.onEnterHandler} type="text"/>
        </div>
        <ul>
          {itemHTML}
        </ul>
      </div>
    )
  }
}
