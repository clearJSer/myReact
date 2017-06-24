import AppDispatcher from './AppDispatcher'

export default {
	addNewItem(text){
		AppDispatcher.dispatch({
			type:'ADD',
			payload:text
		})
	},
	removeItem(index){
		AppDispatcher.dispatch({
			type:'REMOVE',
			payload:index
		})
	}
}
