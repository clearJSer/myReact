import React, { Component } from 'react'

import store from './store'

import { connect } from 'react-redux'


class ReactReduxButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      items: this.props.items
    }
  }

  createNewItem(event) {
    if (event.keyCode === 13) {
      // console.log(this);
      let val = this.refs.input.value
      // store.dispatch({
      //   type: 'ADD',
      //   payload: val
      // })
      this.props.addItem({
        type: 'ADD',
        payload: val
      })
      event.target.value = ''

      this.setState({
        items: this.props.items
      })

      //this.refs.btnb.forceUpdate()
    }
  }

  removeItem(index) {
    this.props.removeItem({
      type: 'REMOVE',
      payload: index
    })
    this.setState({
      items: this.props.items
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

export default connect(store.mapStateToProps, store.mapDispatchToProps)(ReactReduxButton)
