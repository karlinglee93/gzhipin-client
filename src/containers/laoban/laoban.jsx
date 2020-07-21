import React, { Component } from 'react'
import { connect } from 'react-redux'

import {getUserlist} from '../../redux/actions.js'
import Userlist from '../../components/user-list/user-list'

export class Laoban extends Component {

	componentDidMount () {
		this.props.getUserlist('dashen')
	}

	render() {
		return (
			<Userlist userlist={this.props.userlist} />
		)
	}
}

const mapStateToProps = (state) => ({
	userlist: state.userlist
})

const mapDispatchToProps = {
	getUserlist
}

export default connect(mapStateToProps, mapDispatchToProps)(Laoban)
