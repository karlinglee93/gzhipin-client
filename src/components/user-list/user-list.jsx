import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {WhiteSpace, WingBlank, Card} from 'antd-mobile'

const {Header, Body} = Card

export default class Userlist extends Component {
	static propTypes = {
		userlist: PropTypes.array.isRequired
	}

	render() {
		const {userlist} = this.props

		return (
			<div>
				<WingBlank>
				{
					userlist.filter(user => (user.header)).map(user => (
						<div key={user._id}>
							<WhiteSpace />
							<Card>
								<Header
									thumb={require(`../../assets/images/headers/${user.header}.png`)}
									extra={user.username}
								/>
								<Body>
									<div>职位: {user.post}</div>
									{user.company ? <div>公司: {user.company}</div> : null}
									{user.salary ? <div>月薪: {user.salary}</div> : null}
									<div>描述: {user.info}</div>
								</Body>
							</Card>
						</div>
					))
				}
				</WingBlank>
			</div>
		)
	}
}
