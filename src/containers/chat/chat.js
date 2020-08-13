import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavBar, List, InputItem} from 'antd-mobile'
import {sendMsg} from '../../redux/actions'

const Item = List.Item

export class Chat extends Component {

	state = {
		content: ''
	}

	handleClick = () => {
		const from = this.props.user._id
		const to = this.props.match.params.user_id
		const {content} = this.state
		if (content.trim()) {
			this.props.sendMsg({from, to, content})
		}
		this.setState({
			content: ''
		})
	}

	render() {
		const {user} = this.props
		const {users, chatMsgs} = this.props.msglist
		const myId = user._id
		if (!users[myId]) {
			return null	
		}
		const targetId = this.props.match.params.user_id
		const currentId = [myId, targetId].sort().join('_')
		const currentChatMsgs = chatMsgs.filter(chatMsg => chatMsg.chat_id === currentId)
		const targetHeader = users[targetId].header
		const targetIcon = targetHeader ? require(`../../assets/images/headers/${targetHeader}.png`) : null

		return (
			<div id='chat-page'>
				<NavBar>name</NavBar>
				<List>
					{
						currentChatMsgs.map(currentChatMsg => {
							if (targetId === currentChatMsg.from) {
								return (
									<Item
										key={currentChatMsg._id}
										thumb={targetIcon}
									>
										{currentChatMsg.content}
									</Item>
								)
							} else {
								return (
									<Item
										key={currentChatMsg._id}
										className='chat-me'
										extra='我'
									>
										{currentChatMsg.content}
									</Item>
								) 
							}
						})
					}
				</List>
				<div className='am-tab-bar'>
					<InputItem 
						placeholder='请输入'
						extra={<span>发送</span>}
						onExtraClick={this.handleClick}
						value={this.state.content}
						onChange={val => this.setState({content: val})}
					/>
				</div>
				
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.user,
	msglist: state.msglist
})

const mapDispatchToProps = {
	sendMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
