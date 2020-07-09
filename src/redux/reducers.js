import {combineReducers} from 'redux'

import {AUTH_SUCCESS, ERR_MSG} from './action-types'

const initUser = {
	username: '',
	type: '',
	msg: '' // 错误提示信息
}

// 产生user状态的reducer
const user = (state = initUser, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			// 先返回state, 并用action.data将前者覆盖掉
			return {...state, ...action.data}
		case ERR_MSG:
			return {...state, msg: action.data}
		default:
			return state
	}
}

export default combineReducers({
	user
})
// 向外暴露的状态的结构 {user: {}}