import React ,{Component} from 'react'

import Left from './Left'
import Right from './Right'
class Center extends Component{
	render(){
		return (
			<div className= "center">
			  <Left />
			  <div className="right">
				  {this.props.children}
			  </div>
			</div>
		)
	}
}

export default Center;
