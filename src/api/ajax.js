/**
 * 使用axios封装的ajax请求函数
 * 函数的返回值是一个promise对象
 */
import axios from 'axios'

const ajax = (url='', data={}, type='GET') => {
	if (type === 'GET') {
		let dataStr = ''
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&'
		})
		if (dataStr !== '') {
			dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
			url +=  '?' + dataStr // 数据拼接GET请求的字符串格式
		}
		return axios.get(url)
	} else if (type === 'POST') {
		return axios.post(url, data) // data包含请求体数据的对象
	}
}

export default ajax