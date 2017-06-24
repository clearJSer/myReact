import React from 'react'

import HomeBanner from './HomeBanner'
import HomeNews from './HomeNews'

export default class Home extends React.Component{
	render(){
		return (
			<div>
			<HomeBanner />
			<HomeNews />
			</div>
		)
	}
}
