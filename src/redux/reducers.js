import {combineReducers} from 'redux'

import {
	AUTH_SUCCESS, 
	ERR_MSG,
	RECEIVE_USER,
	RESET_USER,
	RECEIVE_USER_LIST,
	RECEIVE_MSG_LIST,
	RECEIVE_MSG
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

const initUserlist = []
// 产生userlist状态的reducer
const userlist = (state = initUserlist, action) => {
	switch (action.type) {
		case RECEIVE_USER_LIST:
			return action.data
		default:
			return state;
	}
}

const initMsgList = {
	users: {},
	chatMsgs: [],
	unreadMsgCount: 0
}
const msglist = (state=initMsgList, action) => {
	switch (action.type) {
		case RECEIVE_MSG_LIST:
			const {users, chatMsgs, myId} = action.data
			return {
				users,
				chatMsgs,
				unreadMsgCount: chatMsgs.reduce((preCount, chatMsg) => preCount + ((myId === chatMsg.to) ? !chatMsg.read : 0), 0)
			}
		case RECEIVE_MSG:
			const {chatMsg} = action.data
			return {
				users: state.users,
				chatMsgs: [...state.chatMsgs, chatMsg],
				unreadMsgCount: state.chatMsgs.unreadMsgCount + ((myId === chatMsg.to) ? !chatMsg.read : 0)
			}
		default:
			return state
	}
}

export default combineReducers({
	user, userlist, msglist
})
// 向外暴露的状态的结构 {user: {}, userlist: [], msglist: {}} 