import { Dispatcher } from 'flux'

import store from './store'

let AppDispatcher = new Dispatcher()
AppDispatcher.register((action)=>{
	switch(action.type){
		case 'ADD' :
		store.setCount(action.payload)
		
		break;
	}
})

export default AppDispatcher
