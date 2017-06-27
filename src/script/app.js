require('../style/app.less')
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './component/react-redux/store'

 

import {Router,hashHistory} from 'react-router'
import routes from "./router/router"
ReactDOM.render(
 <Provider store={store.store}>
	<Router history={hashHistory} routes={routes}></Router>
 </Provider>,
	document.getElementById("root")
)

