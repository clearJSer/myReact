import {EventEmitter} from 'events'

export default Object.assign({},EventEmitter.prototype,{
	items:['item -1','aaaaaaaaaaaaaa','hello'],
	
	getItems:function(){
		return this.items 
	},
	
	addNewItemHandler:function(text){
		 this.items.push(text)
	},
	removeItemHandler(index){
		this.items.splice(index,1)
	},
	emitChange(){
	  this.emit('change')
	}
	,
	addChangeListener(cb){
		this.on('change',cb)
	},
	removeChangeListener(cb){
		this.removeListener('change',cb)
	}
})
