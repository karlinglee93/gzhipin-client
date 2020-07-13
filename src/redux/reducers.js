import {combineReducers} from 'redux'

import {
	AUTH_SUCCESS, 
	ERR_MSG,
	RECEIVE_USER,
	RESET_USER
} from './action-types'
import {getRedirectTo} from '../utils/index'

const initUser = {
	username: '',
	type: '',
	msg: '', // 错误提示信息
	redirectTo: '' // 需要自动重定向的路由路径
}

// 产生user状态的reducer
const user = (state = initUser, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			const {type, header} = action.data
			return {...action.data, redirectTo: getRedirectTo(type, header)}
		case ERR_MSG:
			return {...state, msg: action.data}
		case RECEIVE_USER:
			return action.data
		case RESET_USER:
			return {...initUser, msg: action.data}	
		default:
			return state
	}
}

export default combineReducers({
	user
})
// 向外暴露的状态的结构 {user: {}}