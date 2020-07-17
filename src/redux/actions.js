import {
	reqRegister, 
	reqLogin,
	reqUpdate,
	reqUser
} from '../api/index'
import {
	AUTH_SUCCESS, 
	ERR_MSG,
	RECEIVE_USER,
	RESET_USER
} from './action-types'

// 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步action
const errMsg = (msg) => ({type: ERR_MSG, data: msg})
// Receive user - sync action
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
// Reset user - sync action
const resetUser = (msg) => ({type: RESET_USER, data: msg})

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