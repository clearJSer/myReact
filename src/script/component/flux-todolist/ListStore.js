import { EventEmitter } from 'events'

export default Object.assign({}, EventEmitter.prototype, {
  items: ['item -1'],

  // 用于组件获取items
  getItems() {
    return this.items
  },

  addNewItemHandler(text) {
    this.items.push(text)
  },

  removeItemHandler(index) {
    this.items.splice(index, 1)
  },

  // 重新渲染DOM
  emitChange() {
    this.emit('change')
  },

  // 用户View调用
  addChangeListener(cb) {
    this.on('change', cb)
  },

  removeChangeListener(cb) {
    this.removeListener('change', cb)
  }
})
