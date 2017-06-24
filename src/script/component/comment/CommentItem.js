import React, { Component } from 'react'

import CommentBtn from './CommentBtn'

class CommentItem extends Component {

  replyComment() {
    console.log(0);
  }

  render() {
    return (
      <ul className="item">
        <li><img src="http://placehold.it/80x80" /></li>
        <li>
          <h2>{this.props.author}</h2>
          <p>{this.props.content}</p>
        </li>
        <li>
          <CommentBtn click={this.replyComment} text="回复"></CommentBtn>
        </li>
      </ul>
    )
  }
}

export default CommentItem
