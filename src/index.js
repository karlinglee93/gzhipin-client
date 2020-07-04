import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'

import Registry from './containers/registry/registry'
import Login from './containers/login/login'
import Main from './containers/main/main'


ReactDOM.render((
	<HashRouter>
		<Switch>
			<Route path='/registry' component={Registry} />
			<Route path='/login' component={Login} />
			<Route component={Main} />
		</Switch>
	</HashRouter>
), document.getElementById('root'))