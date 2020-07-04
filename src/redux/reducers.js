import {combineReducers} from 'redux'

const foo = (state = 0, action) => {
	return state
}

const bar = (state = 0, action) => {
	return state
}

export default combineReducers({
	foo, bar
})