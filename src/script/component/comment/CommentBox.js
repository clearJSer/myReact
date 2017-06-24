import React, { Component } from 'react'

import CommentList from './CommentList'
import FormBox from './FormBox'

class CommentBox extends Component {

  constructor(props) {
    super(props)

    this.resiveHanlder = this.resiveHanlder.bind(this)

    this.state = {
      list: []
    }
  }

  resiveHanlder(obj) {
    this.setState({
      list: [obj]
    })
  }

  render() {
    return (
      <div className="box">
        <CommentList comment={ this.state.list } />
        <FormBox onRecieveHandler={this.resiveHanlder} />
      </div>
    )
  }
}

export default CommentBox
