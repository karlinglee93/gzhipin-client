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