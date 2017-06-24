import {Dispatcher} from 'flux'

import ListStore from './ListStore'

let AppDispatcher = new Dispatcher()

AppDispatcher.register((action)=>{
	switch(action.type){
		case "ADD":
		ListStore.addNewItemHandler(action.payload)
		break;
		case "REMOVE":
		ListStore.removeItemHandler(action.payload)
		break;
	}
	ListStore.emitChange()
})

export default AppDispatcher