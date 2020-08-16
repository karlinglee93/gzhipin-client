import React, { Component } from 'react'
import { connect } from 'react-redux'
import {List, Badge} from 'antd-mobile'

const {Item} = List
const {Brief} = Item

export class Message extends Component {

	getLastMsgs = (chatMsgs, myId) => {
		const lastMsgObjs = {}
		chatMsgs.forEach(chatMsg => {
			const {chat_id, create_time} = chatMsg

			if (chatMsg.to === myId && !chatMsg.read) {
				chatMsg.unReadCount = 1
			} else {
				chatMsg.unReadCount = 0
			}

			if (!lastMsgObjs[chat_id]) {
				lastMsgObjs[chat_id] = chatMsg
			} else {
				const unReadCount = chatMsg.unReadCount + lastMsgObjs[chat_id].unReadCount
				if (lastMsgObjs[chat_id].create_time < create_time) {
					lastMsgObjs[chat_id] = chatMsg
				}
				lastMsgObjs[chat_id].unReadCount = unReadCount
			}
		})

		const lastMsgs = Object.values(lastMsgObjs)
		lastMsgs.sort((lm1, lm2) => {
			// return结果小于0时, m1在前
			return lm2.create_time - lm1.create_time
		})

		return lastMsgs
	}

	render() {
		const {user} = this.props
		const {users, chatMsgs} = this.props.msglist
		const lastMsgs = this.getLastMsgs(chatMsgs, user._id)
		const myId = user._id

		return (
			<List style={{marginTop: 45, marginBottom: 50}}>
				{
					lastMsgs.map(lastMsg => {
						const targetId = (myId === lastMsg.from) ? lastMsg.to : lastMsg.from
						const targetName = users[targetId].username
						const targetHeader = users[targetId].header

						return (
							<Item
								key={lastMsg._id}
								arrow="horizontal"
								thumb={require(`../../assets/images/headers/${targetHeader}.png`)}
								extra={<Badge text={lastMsg.unReadCount}/>}
								multipleLine
								onClick={() => this.props.history.push(`/chat/${targetId}`)}
							>
								{lastMsg.content}
								<Brief>{targetName}</Brief>
							</Item>
						)
					})
				}
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
