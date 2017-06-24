require('../style/app.less')
import React from 'react'
import ReactDOM from 'react-dom'

 

import {Router,hashHistory} from 'react-router'
import routes from "./router/router"
ReactDOM.render(
	
	<Router history={hashHistory} routes={routes}></Router>,
	document.getElementById("root")
)


console.log("hello react")
