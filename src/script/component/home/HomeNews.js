import React from 'react'

import HomeNewsList from './HomeNewsList'
class HomeNews extends React.Component{
	render(){
		return (
			<ul className="index_news">
				<HomeNewsList title="朝闻天下" uri="/api/qanda/list" />
        		<HomeNewsList title="小微信贷" uri="/api/interviewq/list" />
        		<HomeNewsList title="最新银行信息" uri="/api/job/list" />
			</ul>
		)
	}
}

export default HomeNews