import React, {Component} from 'react'
import {
	NavBar, 
	WingBlank, 
	List, 
	WhiteSpace, 
	InputItem, 
	Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo/logo'
import {login} from '../../redux/actions'

class Login extends Component {

	state = {
		username: '',
		password: ''
	}

	handleLogin = () => {
		this.props.login(this.state)
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
		const {msg, redirectTo} = this.props.user
		if (redirectTo) {
			return <Redirect to={redirectTo}/>
		}

		return (
			<div>
				<NavBar mode='dark'>特&nbsp;聘&nbsp;搬&nbsp;砖&nbsp;工</NavBar>
				<Logo />
				<WingBlank size='lg'>
					<List>
						{msg ? <p className='err-msg'>{msg}</p> : null}
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

export default connect(
	state => ({user: state.user}),
	{login}
)(Login)