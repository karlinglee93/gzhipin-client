import React, { Component } from 'react'
import { connect } from 'react-redux'
import {List, Badge} from 'antd-mobile'

const {Item} = List
const {Brief} = Item

export class Message extends Component {

	getLastMsgs = (myId, users, chatMsgs) => {
		const lastMsgs = []
		const lastMsg = {}
		// debugger
		chatMsgs.forEach(chatMsg => {
			if (!lastMsg[chatMsg.chat_id]) {
				const targetId = (myId === chatMsg.from) ? chatMsg.to : chatMsg.from
				lastMsg[chatMsg.chat_id] = chatMsg
				lastMsg[chatMsg.chat_id].username = users[targetId].username
				lastMsg[chatMsg.chat_id].header = users[targetId].header
			} else {
				if (lastMsg[chatMsg.chat_id].create_time < chatMsg.create_time) {
					lastMsg[chatMsg.chat_id] = chatMsg
				}
			}
		})
		console.log('lastMsg', lastMsg)

		return lastMsgs
	}

	render() {
		const {user} = this.props
		const {users, chatMsgs} = this.props.msglist
		const myId = user._id
		const lastMsgs = this.getLastMsgs(myId, users, chatMsgs)

		return (
			<List style={{marginTop: 45, marginBottom: 50}}>
				<Item
					arrow="horizontal"
					thumb={require('../../assets/images/headers/头像1.png')}
					extra={<Badge text={3}/>}
					multipleLine
					onClick={() => {}}
				>
					{'Last msg'}
					<Brief>{'username'}</Brief>
				</Item>
			</List>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	msglist: state.msglist
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
