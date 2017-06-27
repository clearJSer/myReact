import { createStore } from 'redux'

import reducer from './reducer'

// 将 state 映射到组件的 props上
const mapStateToProps = (state) => {
  return {
    items: state
  }
}

// 将 dispatcher 映射到组件的 props上
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (action) => dispatch(action),
    removeItem: (action) => dispatch(action)
  }
}

const store = createStore(reducer)

export default {
  mapStateToProps,
  mapDispatchToProps,
  store
}
