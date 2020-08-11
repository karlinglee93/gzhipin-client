import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookie from 'js-cookie'
import {NavBar} from 'antd-mobile'

import DashenInfo from '../dashen-info/dashen-info'
import LaobanInfo from '../laoban-info/laoban-info'
import {getRedirectTo} from '../../utils/index'
import {getUser} from '../../redux/actions'
import Laoban from '../laoban/laoban'
import Dashen from '../dashen/dashen'
import Message from '../message/message'
import Personal from '../personal/personal'
import NotFound from '../../components/not-found/not-found'
import NavFooter from '../../components/nav-footer/nav-footer'
import Chat from '../../containers/chat/chat'

class Main extends Component {

	// 组件类和组件对象
	// 给组件对象添加属性 
	navList = [
		{
			path: '/laoban', // 路由路径 
			component: Laoban,
			title: '大神列表',
			icon: 'dashen',
			text: '大神'
		}, 
		{
			path: '/dashen',
			component: Dashen,
			title: '老板列表',
			icon: 'laoban',
			text: '老板'
		},
		{
			path: '/message',
			component: Message,
			title: '消息列表',
			icon: 'message',
			text: '消息'
		}, 
		{
			path: '/personal',
			component: Personal,
			title: '用户中心',
			icon: 'personal',
			text: '个人'
		}
	]

	componentDidMount () {
		const user_id = Cookie.get('user_id')
		const {user} = this.props
		if (user_id && !user._id) {
			// 发送异步请求获取user
			this.props.getUser()
		}
	}

	render () {
		// 读取cookie中的user_id
		const user_id = Cookie.get('user_id')
		// 如果没有, 则自动重定向到/login
		if (!user_id) {
			return <Redirect to='/login'/>
		}
		// 如果有, 则读取redux中的user状态
		const {user} = this.props
		// 如果user状态中没有_id, 返回null(不做任何显示)
		if (!user._id) {
			return null
		} else {
			// 如果有, 则显示对应的界面
			// 如果请求的是根路径, 则根据user的type和header计算并重定向出此时的路由路径
			let path = this.props.location.pathname
			if (path === '/') {
				path = getRedirectTo(user.type, user.header)
				return <Redirect to={path}/>
			}
		}

		let {navList} = this
		const path = this.props.location.pathname
		const curNav = navList.find(nav => path === nav.path)
		if (curNav) {
			if (user.type === 'dashen') {
				navList[0].hidden = true
			} else if (user.type === 'laoban') {
				navList[1].hidden = true
			}
			navList = navList.filter(nav => !nav.hidden)
		}

		return (
			<div>
				{curNav ? <NavBar className='stick-top'>{curNav.title}</NavBar> : null}
				<Switch>
					<Route path='/dasheninfo' component={DashenInfo} />
					<Route path='/laobaninfo' component={LaobanInfo} />
					{
						this.navList.map(nav => <Route path={nav.path} component={nav.component} />)
					}
					<Route path='/chat/:user_id' component={Chat} />
					<Route component={NotFound} />
				</Switch>
				{curNav ? <NavFooter navList={navList} /> : null}
			</div>
		)
	}
}

export default connect(
	state => ({user: state.user}),
	{getUser}
)(Main)

/** 
 * 实现自动登陆
 * 1. componentDidMount()
 * 	1) cookie中有user_id, redux管理的user中无user_id, 则发送请求获取对应的user
 * 2. render()
 * 	1) 如果cookie中无user_id, 则重定向到/login
 * 	2) 如果cookie中有user_id, redux中无user_id, 则在componentDidMount()中获取对应的user
 * 	3) 如果cookie中有user_id, redux中有user_id, 说明当前已经登陆, 则显示对应的界面
 * 	4) 如果请求根路径: 则根据user的type和header来计算并自动重定向一个的路由路径
 */