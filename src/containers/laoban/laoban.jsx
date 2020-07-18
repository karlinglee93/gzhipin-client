import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Laoban extends Component {
	render() {
		return (
			<div>
				Laoban
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Laoban)
