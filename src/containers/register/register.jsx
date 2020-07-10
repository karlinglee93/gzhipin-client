import React, {Component} from 'react'
import {
	NavBar, 
	WingBlank, 
	List, 
	WhiteSpace, 
	InputItem, 
	Radio, 
	Button,
	// Toast
} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo/logo'
import {register} from '../../redux/actions'

const {Item} = List

class Register extends Component {

	state = {
		username: '',
		password: '',
		password2: '',
		type: 'dashen'
	}

	handleRegister = () => {
		this.props.register(this.state)
	}

	handleChange = (name, val) => {
		this.setState({
			[name]: val // 属性名不是name，而是变量name的值。用[]取值
		})
	}

	toLogin = () => {
		this.props.history.replace('/login') // push() and replace()
	}

	render () {
		const {type} = this.state
		const {msg, redirectTo} = this.props.user
		// 如果redirectTo有值, 就需要重定向到指定的路由
		if (redirectTo) {
			return <Redirect to={redirectTo}/>
		}

		return (
			<div>
				{/* {msg ? Toast.fail(msg) : null} */}
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
						<InputItem type='password' onChange={val => {this.handleChange('password2', val)}} placeholder='请确认密码'>确认密码</InputItem>
						<WhiteSpace size='md' />
						<Item>
							<span>用户类型</span>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<Radio checked={type === 'dashen'} onChange={() => {this.handleChange('type', 'dashen')}}>大神</Radio>
							&nbsp;&nbsp;&nbsp;
							<Radio checked={type === 'laoban'} onChange={() => {this.handleChange('type', 'laoban')}}>老板</Radio>
						</Item>
						<WhiteSpace size='md' />
						<Button type='primary' onClick={this.handleRegister}>注&nbsp;&nbsp;&nbsp;册</Button>
						<WhiteSpace size='md' />
						<Button onClick={this.toLogin}>已有账户</Button>
					</List>
				</WingBlank>
			</div>
		)
	}
}

// 将该UI组件包装生成一个容器组件
export default connect(
	// user是来自reducers中的state
	state => ({user: state.user}),
	{register}
)(Register)