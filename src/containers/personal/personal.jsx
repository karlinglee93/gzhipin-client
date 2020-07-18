import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Personal extends Component {
	render() {
		return (
			<div>
				Personal
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal)
