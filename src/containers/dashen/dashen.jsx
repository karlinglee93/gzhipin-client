import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Dashen extends Component {
	render() {
		return (
			<div>
				Dashen
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashen)
