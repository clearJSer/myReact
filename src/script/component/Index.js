import React ,{Component} from 'react'

import Header from './common/Header'
import Center from './common/Center'

export default class Index extends Component{
	render(){
		return(
			<div>
			  <Header/>
			  {this.props.children}
			</div>
		)
	}
	
}
