import React, {Component} from 'react'

import logo from './logo.png'
import './logo.scss'

export default class Logo extends Component {
	render () {
		return (
			<div className="logo-container">
				<img className="logo-img" src={logo} alt="logo"/>
			</div>
		)
	}
}