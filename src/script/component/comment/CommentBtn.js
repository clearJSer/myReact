import React, { Component } from 'react'

class CommentBtn extends Component {
  render() {
    return (
      <button onClick={this.props.click}>{this.props.text}</button>
    )
  }
}

export default CommentBtn
