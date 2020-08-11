import io from 'socket.io-client'

// 连接服务器, 得到代表连接的socket对象
const socket = io('ws://localhost:4001')
// 向服务器发送消息
socket.emit('sendMsg', {name: 'Tom', date: Date.now()})
// console.log('客户端向服务器发送消息: ', {name: 'Tom', date: Date.now()})
// 绑定监听, 来接收服务器发送的消息
socket.on('receiveMsg', data => {
	console.log('客户端接收到消息: ', data)
})