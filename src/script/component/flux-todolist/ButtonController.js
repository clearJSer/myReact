import React, { Component } from 'react'

import ListStore from './ListStore'

import ButtonActions from './ButtonActions'

import Button from './Button'

class ButtonController extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // 初次读取 store items
      items: ListStore.getItems()
    }
  }

  // 由Action 执行完 items改变后，重新自动渲染DOM
  _onChange() {
    this.setState({
      items: ListStore.getItems()
    })
  }

  // 供子组件输入信息后回车，来调用Action 添加方法
  createNewItem(event) {
    if (event.keyCode === 13) {
      let val = this.refs.btn.refs.input.value
      ButtonActions.addNewItem(val)
      event.target.value = ''
    }
  }

  removeItem(index) {
    ButtonActions.removeItem(index)
  }

  render() {
    return (
      <Button ref="btn" onRemoveHandler={this.removeItem.bind(this)} onEnterHandler={this.createNewItem.bind(this)} items={this.state.items} />
    )
  }

  componentDidMount() {
    ListStore.addChangeListener(this._onChange.bind(this))
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange.bind(this))
  }
}

export default ButtonController
