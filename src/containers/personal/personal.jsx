import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Result, List, WhiteSpace, Button, Modal} from 'antd-mobile'
import Cookie from 'js-cookie'

import {resetUser} from '../../redux/actions'

const Item = List.Item
const Brief = Item.Brief

export class Personal extends Component {

	logout = () => {
		Modal.alert('退出', '确定退出登录吗?', [
			{text: '取消'},
			{
				text: '确定',
				onPress: () => {
					// 清除cookie中的user_id
					Cookie.remove('user_id')
					// 初始化redux中的user
					this.props.resetUser()
				}
			}
		])
	}

	render() {
		const {username, header, post, info, company, salary} = this.props.user

		return (
			<div style={{marginTop: 45}}>
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
				<Button type='warning' onClick={this.logout}>退出登录</Button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user
})

const mapDispatchToProps = {
	resetUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal)
