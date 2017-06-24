import React ,{Component} from 'react'

import MyButton from './MyButton'
import ListStore from './ListStore'
import ButtonActions from './ButtonAction'

class ButtonController extends Component{
	constructor(props){
		super(props)
		this.state = {
			items: ListStore.getItems()
		}
	}
	_onChange(){
		this.setState({
			items:ListStore.getItems()
		})
	}
	removeItem(index){
		ButtonActions.removeItem(index)
	}
	createNewItem(event){
		if(event.keyCode === 13){
			let val = this.refs.btn.refs.input.refs.input.value
			ButtonActions.addNewItem(val)
			event.target.value = ''
		}
	}
	render(){
		return(
			<MyButton ref="btn" onRemoveHandler={this.removeItem.bind(this)} onEnterHandler={this.createNewItem.bind(this)} items={this.state.items} />
		)
	}
	componentDidMount(){
		ListStore.addChangeListener(this._onChange.bind(this))
	}
	componentWillunmount(){
		ListStore.removeChangeListener(this._onChange.bind(this))
	}
}
export default ButtonController