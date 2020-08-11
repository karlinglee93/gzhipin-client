import io from 'socket.io-client'

import {
	reqRegister, 
	reqLogin,
	reqUpdate,
	reqUser,
	reqUserlist
} from '../api/index'
import {
	AUTH_SUCCESS, 
	ERR_MSG,
	RECEIVE_USER,
	RESET_USER,
	RECEIVE_USER_LIST
} from './action-types'

function initIO () {
	/**
	 * 单例对象
	 * 1) 创建对象之前: 判断对象是否存在, 只有不存在时才进行创建
	 * 2) 创建对象之后: 保存对象 1) 实例保存在全局变量中 2) 实例保存在某一个对象中
	 */
	if (!io.socket) {
		io.socket = io('ws://localhost:4001')
		io.socket.on('receiveMsg', chatMsg => {
			console.log('客户端接收消息: ', chatMsg)
		})
	}
}

// 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步action
const errMsg = (msg) => ({type: ERR_MSG, data: msg})
// Receive user - sync action
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
// Reset user - sync action
export const resetUser = (msg) => ({type: RESET_USER, data: msg})
// Receive user list - sync action
const receiveUserlist = (userlist) => ({type: RECEIVE_USER_LIST, data: userlist})

// 注册异步action
export const register = (user) => {
	const {username, password, password2, type} = user
	// 做表单的前台检查, 如果不通过, 返回一个errorMsg的同步action
	if (!username || !password || !type) {
		return errMsg('用户名和密码必须输入')
	} else if (password !== password2) {
		return errMsg('两次输入的密码要一致')
	}

	// 表单数据合法, 返回一个发ajax请求的异步action函数
	return async dispatch => {
		// 发送注册的异步ajax请求
		// 返回Promise对象
		// const promise = reqRegister(user)
		// promise.then(response => {
		// 	const result = response.data // {code: 0/1, data/msg}
		// })
		const response = await reqRegister({username, password, type})
		const result = response.data
		if (result.code === 0) {
			dispatch(authSuccess(result.data))
		} else {
			dispatch(errMsg(result.msg))
		}
	}
}

// 登陆异步action
export const login = (user) => {
	const {username, password} = user
	if (!username || !password) {
		return errMsg('用户名和密码必须输入')
	}

	return async dispatch => {
		const response = await reqLogin(user)
		const result = response.data
		if (result.code === 0) {
			dispatch(authSuccess(result.data))
		} else {
			dispatch(errMsg(result.msg))
		}
	}
}

// Update user info - async action
export const updateUser = (user) => {
	return async dispatch => {
		const response = await reqUpdate(user)
		const result = response.data
		if (result.code === 0) {
			dispatch(receiveUser(result.data))
		} else {
			dispatch(resetUser(result.msg))
		}
	}
}

// Get user info
export const getUser = () => {
	return async dispatch => {
		const response = await reqUser()
		const result = response.data
		if (result.code === 0) {
			dispatch(receiveUser(result.data))
		} else {
			dispatch(resetUser(result.msg))
		}
	}
}

// Receive user list - async action
export const getUserlist = (type) => {
	return async dispatch => {
		// 执行异步ajax请求
		const response = await reqUserlist(type)
		const result = response.data
		// 得到结果, 分发一个同步action
		if (result.code === 0) {
			dispatch(receiveUserlist(result.data))
		}
	}
}

export const sendMsg = ({from, to, content}) => {
	return dispatch => {
		// initIO() 初始化时机不对, 需要优化
		initIO()
		io.socket.emit('sendMsg', {from, to, content})
		console.log('客户端发送消息: ', {from, to, content})
	}
}