import React ,{Component} from 'react'
import { Carousel } from 'antd';
class HomeBanner extends Component{
	render(){
		return (
			<div className="banner-box">
			 <Carousel autoplay>
			    <div><img src={require('../../../images/1.jpg')} height="300px" width="800px"/></div>
			    <div><img src={require('../../../images/2.jpg')} height="300px" width="800px"/></div>
			    <div><img src={require('../../../images/3.jpg')} height="300px" width="800px"/></div>
			  </Carousel>
			</div>  
		)
	}
}

export default HomeBanner