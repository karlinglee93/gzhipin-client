import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Message extends Component {
	render() {
		return (
			<div>
				Message
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
