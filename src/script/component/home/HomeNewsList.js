import React ,{Component} from 'react'
import Link from 'react-router'
import fetchUtil from '../../utils/fetch'
class HomeNewsList extends Component {
	constructor(props){
		super(props)
		this.state = {
			dataSource:[]
		}
	}
	
	render(){
		return(
	      <li className="news_list">
	        <div className="index_title">
	          <p>{this.props.title}</p>
	          <span>更多</span>
	        </div>
	        <div className="news_content">
	        	{
	        		this.state.dataSource.map((value,index) =>{
	        			return(
			            <div key={index}  className="news_content_list">
			              <p>{value.title}</p>
			              <p className="news_content_time">{value.createDate}</p>
			              <br />
			            </div>
	        			)
	        		})
	        	}
	            
	        </div>
	      </li>
		)
	}
    componentDidMount(){
		fetch(this.props.uri)
		.then(response => response.json())
		.then(res =>{
			console.log(res.data.subjects)
		  this.setState({
		  	dataSource:res.data.subjects
		  })
		})
    }
}

export default HomeNewsList