import {combineReducers} from 'redux'

const initUser = {
	username: '',
	type: '',
	msg: '' // 错误提示信息
}

// 产生user状态的reducer
const user = (state = initUser, action) => {
	switch (action.type) {
	
		default:
			return state
	}
}

export default combineReducers({
	user
})
// 向外暴露的状态的结构 {user: {}}