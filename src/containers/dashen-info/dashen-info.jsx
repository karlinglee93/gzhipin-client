import React, {Component} from 'react'
import {connect} from 'react-redux'

class DashenInfo extends Component {
	render () {
		return (
			<div>DashenInfo</div>
		)
	}
}

export default connect(
	state => ({}),
	{}
)(DashenInfo)