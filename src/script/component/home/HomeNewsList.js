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
	    let to = ''
	    switch (this.props.uri) {
	      case '/api/qanda/list':
	        to = '/qanda/list'
	        break;
	      case '/api/interviewq/list':
	        to = '/job/list?activeKey=1'
	        break;
	      case '/api/job/list':
	        to = '/job/list?activeKey=2'
	        break;
	    }
		return(
	      <li className="news_list">
	        <div className="index_title">
	          <p>{this.props.title}</p>
	          <span>更多</span>
	        </div>
	        <div className="news_content">
	            <div className="news_content_list">
	              <p>{'value.title'}</p>
	              <p className="news_content_time">{'value.createDate'}</p>
	              <br />
	            </div>
	        </div>
	      </li>
		)
	}
    compontentDidMount(){
    	fetchUtil.get(this.props.uri,'start=0&count=6',(res)=>{
    		this.setState(
    			{
    				dataSource:res.data.subjects
    			}
    		)
    	})
    }
}

export default HomeNewsList