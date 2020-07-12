/**
 * 用户主界面路由
 * 	dashen: /dashen
 * 	laoban: /laoban
 * 用户信息完善界面路由
 * 	dasheninfo: /dasheninfo
 * 	laobaninfo: /laobaninfo
 * 
 * 判断是否已经完善信息? user.header是否有值
 * 判断用户类型? user.type
 */
export const getRedirectTo = (type, header) => {
	let path

	if (type === 'dashen') {
		path = '/dashen'
	} else if (type === 'laoban') {
		path = '/laoban'
	} else {
		path = '/'
	}
	if (!header) {
		path += 'info'
	}

	return path
}