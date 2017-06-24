import AppDispatcher from './AppDispatcher'


export default {
	addCount(){
		AppDispatcher.dispatch({
			type:'ADD',
			payload :'abc'
		})
	}
}
