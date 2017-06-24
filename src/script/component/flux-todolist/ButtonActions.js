import AppDispatcher from './appDispatcher'

export default {
  addNewItem(text) {
    AppDispatcher.dispatch({
      type: 'ADD',

      // 用户输入的内容
      payload: text
    })
  },

  removeItem(index) {
    AppDispatcher.dispatch({
      type: 'REMOVE',

      // 删除的item的 索引
      payload: index
    })
  }
}
