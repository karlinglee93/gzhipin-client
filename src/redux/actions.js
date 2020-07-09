import {reqRegister, reqLogin} from '../api/index'
import {AUTH_SUCCESS, ERR_MSG} from './action-types'

// 授权成功的同步action
export const authSuccess = (user) = ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步action
export const errMsg = (msg) = ({type: ERR_MSG, data: msg})

// 注册异步action
export const register = (user) => {
	return async dispatch => {
		// 发送注册的异步ajax请求
		// 返回Promise对象
		// const promise = reqRegister(user)
		// promise.then(response => {
		// 	const result = response.data // {code: 0/1, data/msg}
		// })
		const response = await reqRegister(user)
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