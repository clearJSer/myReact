import Home from '../component/home/Home'
import Index from '../component/Index'
import Center from '../component/common/Center'
import UsersList from '../component/users/UsersList'
import TaskList from '../component/task/TaskList'
import Comment from '../component/comment/CommentBox'

//flux 
import FluxView from '../component/flux/FluxView'
//to do List
import ButtonController from '../component/fluxtodolist/ButtonController'
import ReactReduxButton from '../component/react-redux/ReactReduxButton'
import {Route,IndexRedirect } from 'react-router'
//这是坑
import React from 'react'

export default (
	<Route path = "/" component={Index}>
	    <IndexRedirect to="/center/home"></IndexRedirect>
		<Route path="center" component={Center}>
		    <Route path="home" component={Home}></Route>
			<Route path="users" component={UsersList}></Route>
			<Route path="task" component={TaskList}></Route>
			<Route path="comment" component={Comment}></Route>
			<Route path="flux" component={FluxView}></Route>
			<Route path="todolist" component={ButtonController}></Route>
			<Route path="reactredux" component={ReactReduxButton}></Route>
		</Route>
	</Route>
	
//	<Route path="/" component={Index}>
//	    <IndexRedirect to="/home"></IndexRedirect>
//	    <Route path="home" component={Home}></Route>
//	    <Route path="video">
//	      <Route path="list" component={Video}></Route>
//	    </Route>
//	    <Route path="qanda">
//	      <Route path="list" component={QandaList}></Route>
//	    </Route>
//	    <Route path="job">
//	      <Route path="list" component={JobList}></Route>
//	    </Route>
//</Route>
)
