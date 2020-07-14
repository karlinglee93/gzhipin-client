import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import DashenInfo from '../dashen-info/dashen-info'
import LaobanInfo from '../laoban-info/laoban-info'

class Main extends Component {

	render () {
		// 检查用户是否登陆
		const {user} = this.props
		if (!user._id) {
			return <Redirect to='/login'/>
		}

		return (
			<div>
				<Switch>
					<Route path='/dasheninfo' component={DashenInfo} />
					<Route path='/laobaninfo' component={LaobanInfo} />
				</Switch>
			</div>
		)
	}
}

export default connect(
	state => ({user: state.user}),
)(Main)