import React, { Component } from 'react'

import CommentBtn from './CommentBtn'

import emitter from './events'

class FormBox extends Component {

  submitForm() {
    let author = this.refs.author.value
    let content = this.refs.content.value
    // this.props.onRecieveHandler({author, content})

    emitter.emit('inputChange', {author, content})

    this.refs.author.value = ''
    this.refs.content.value = ''
  }

  render() {
    return (
      <div>
        <input ref="author" type="text" />
        <textarea ref="content" name="" id="" cols="30" rows="10"></textarea>
        <CommentBtn click={this.submitForm.bind(this)} text="提交"></CommentBtn>
      </div>
    )
  }
}

export default FormBox
