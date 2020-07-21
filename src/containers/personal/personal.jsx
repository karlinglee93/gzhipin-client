import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Result, List, WhiteSpace, Button} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

export class Personal extends Component {

	render() {
		const {username, header, post, info, company, salary} = this.props.user

		return (
			<div>
				<Result 
					img={<img src={require(`../../assets/images/headers/${header}.png`)} style={{width: 50}} alt='header' />}
					title={username}
					message={company}
				/>
				<List renderHeader={() => '相关信息'}>
					<Item multipleLine>
						<Brief>{`职位: ${post}`}</Brief>
						<Brief>{`简介: ${info}`}</Brief>
						{salary ? <Brief>{`薪资: ${salary}`}</Brief> : null}
					</Item>
				</List>
				<WhiteSpace />
				<Button type='warning'>退出登录</Button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal)
