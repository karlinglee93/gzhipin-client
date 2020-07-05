import React, {Component} from 'react'
import {
	NavBar, 
	WingBlank, 
	List, 
	WhiteSpace, 
	InputItem, 
	Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Login extends Component {

	state = {
		username: '',
		password: ''
	}

	handleLogin = () => {
		console.log(this.state)
	}

	handleChange = (name, val) => {
		this.setState({
			[name]: val
		})
	}

	toRegister = () => {
		this.props.history.replace('/register')
	}

	render () {
		return (
			<div>
				<NavBar mode='dark'>特&nbsp;聘&nbsp;搬&nbsp;砖&nbsp;工</NavBar>
				<Logo />
				<WingBlank size='lg'>
					<List>
						<WhiteSpace size='md' />
						<InputItem type='text' onChange={val => {this.handleChange('username', val)}} placeholder='请输入用户名'>用户名</InputItem>
						<WhiteSpace size='md' />
						<InputItem type='password' onChange={val => {this.handleChange('password', val)}} placeholder='请输入密码'>密&nbsp;&nbsp;&nbsp;码</InputItem>
						<WhiteSpace size='md' />
						<Button type='primary' onClick={this.handleLogin}>登&nbsp;&nbsp;&nbsp;陆</Button>
						<WhiteSpace size='md' />
						<Button onClick={this.toRegister}>Sign up</Button>
					</List>
				</WingBlank>
			</div>
		)
	}
}