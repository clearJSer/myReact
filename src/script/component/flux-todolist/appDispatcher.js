import { Dispatcher } from 'flux'

import ListStore from './ListStore'

let AppDispatcher = new Dispatcher()

AppDispatcher.register((action)=>{
  switch (action.type) {
    case 'ADD':
      ListStore.addNewItemHandler(action.payload)
      
      // 重新渲染组件DOM
      ListStore.emitChange()
      break;
    case 'REMOVE':
      ListStore.removeItemHandler(action.payload)

      // 重新渲染组件DOM
      ListStore.emitChange()
      break;
  }
})

export default AppDispatcher
