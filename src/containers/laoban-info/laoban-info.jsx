import React, {Component} from 'react'
import {connect} from 'react-redux'

class LaobanInfo extends Component {
	render () {
		return (
			<div>LaobanInfo</div>
		)
	}
}

export default connect(
	state => ({}),
	{}
)(LaobanInfo)