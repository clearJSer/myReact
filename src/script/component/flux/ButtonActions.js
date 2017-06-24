import AppDispatcher from './appDispatcher'

export default {
  addCount() {
    AppDispatcher.dispatch({
      type: 'ADD',
      payload: 'abc'
    })
  }
}
