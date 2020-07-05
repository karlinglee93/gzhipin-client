import React, {Component} from 'react'
import {
	NavBar, 
	WingBlank, 
	List, 
	WhiteSpace, 
	InputItem, 
	Radio, 
	Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

const {Item} = List

export default class Registry extends Component {
	render () {
		return (
			<div>
				<NavBar mode='dark'>特&nbsp;聘&nbsp;搬&nbsp;砖&nbsp;工</NavBar>
				<Logo />
				<WingBlank size='lg'>
					<List>
						<WhiteSpace size='md' />
						<InputItem type='text'>用户名</InputItem>
						<WhiteSpace size='md' />
						<InputItem type='password'>密&nbsp;&nbsp;&nbsp;码</InputItem>
						<WhiteSpace size='md' />
						<InputItem type='password' placeholder='请确认密码'>确认密码</InputItem>
						<WhiteSpace size='md' />
						<Item>
							<span>用户类型</span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<Radio>大神</Radio>
							&nbsp;&nbsp;&nbsp;
							<Radio>老板</Radio>
						</Item>
						<WhiteSpace size='md' />
						<Button type='primary'>注&nbsp;&nbsp;&nbsp;册</Button>
						<WhiteSpace size='md' />
						<Button>已有账户</Button>
					</List>
				</WingBlank>
			</div>
		)
	}
}