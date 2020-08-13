/**
 * 包含n个接口请求函数的模块
 * 每个函数的返回值都是Promise对象
 */
import ajax from './ajax'

// 注册接口
export const reqRegister = user => ajax('/register', user, 'POST')
// 登陆接口
export const reqLogin = user => ajax('/login', user, 'POST')
// update interface
export const reqUpdate = user => ajax('/update', user, 'POST')
// get user info
export const reqUser = () => ajax('/user')
// get user list
export const reqUserList = (type) => ajax('/userlist', {type})
// get msg list
export const reqMsgList = () => ajax('/msglist')
// update msg as read
export const reqReadMsg = (from) => ajax('/readmsg', {from}, 'POST')