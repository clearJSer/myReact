import React from 'react'

import HomeNewsList from './HomeNewsList'
class HomeNews extends React.Component{
	render(){
		return (
			<ul className="index_news">
				<HomeNewsList title="今日任务" uri="/mock/news1" />
        		<HomeNewsList title="审批流程" uri="/mock/news2" />
        		<HomeNewsList title="最新银行信息" uri="/mock/news3" />
			</ul>
		)
	}
}

export default HomeNews