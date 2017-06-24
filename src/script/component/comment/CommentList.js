import React, { Component } from 'react'

import CommentItem from './CommentItem'

import PropTypes from 'prop-types'

import emitter from './events'

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  static propTypes = {
    comment: PropTypes.array.isRequired //string,number,func,bool,object,element,node
  }

  componentWillReceiveProps(props) {
    this.state.data = props.comment.concat(this.state.data)
  }

  render() {
    console.log(1);
    return (
      <div>
        { this.getList(this.state.data) }
      </div>
    )
  }


  getList(arr) {
    return arr.map((value, index) => {
      return <CommentItem key={index} author={value.author} content={value.content} />
    })
  }

  componentDidMount() {
//  fetch('http://localhost:9000/list')
//    .then(response => response.json())
//    .then(res => {
//      this.setState({
//        data: res
//      })
//    }).catch(e => console.log("Oops, error", e))
      this.setState({
          data: [{"author":"老铁","content":"Hello"}]
      })
    emitter.on('inputChange', (data)=>{
      this.setState({
        data: [data].concat(this.state.data)
      })
    })
  }

  componentWillUnmount() {
    emitter.removeListener('inputChange',()=>{})
    console.log(333333333333);
  }
}

export default CommentList



function trust(a,b) {
  console.log(b)
  return {
    trust: function (c) {
      return trust(c, a)
    }
  }
}
var x = trust(0); x.trust(1); x.trust(2)
// var y = trust(0).trust(1); y.trust(2)
// var z = trust(0).trust(1).trust(2)
