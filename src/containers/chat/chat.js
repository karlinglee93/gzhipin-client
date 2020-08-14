import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavBar, List, InputItem, Grid} from 'antd-mobile'
import {sendMsg} from '../../redux/actions'

const Item = List.Item

export class Chat extends Component {

	state = {
		content: '',
		isShowEmojis: false
	}

	componentWillMount() {
		const emojis = [
			'😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀',
			'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣', '🤣','😀',
			'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣', '🤣','😀',
			'😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣','😀', '😁', '🤣', '🤣','😀'
		]
		this.emojis = emojis.map(e => ({text: e}))
	}

	handleClick = () => {
		const from = this.props.user._id
		const to = this.props.match.params.user_id
		const {content} = this.state
		if (content.trim()) {
			this.props.sendMsg({from, to, content})
		}
		this.setState({
			content: '',
			isShowEmojis: false
		})
	}

	handleToggleEmojis = () => {
		const isShowEmojis = !this.state.isShowEmojis
		this.setState({
			isShowEmojis: isShowEmojis
		})
		if (isShowEmojis) {
			// 异步手动派发resize事件, 解决表情列表显示的bug
			setTimeout(() => {
				window.dispatchEvent(new Event('resize'))
			}, 0)
		}
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
						extra={
							<React.Fragment>
								<span 
									role="img" 
									aria-label="emoji-lists" 
									style={{marginRight: '5px'}}
									onClick={this.handleToggleEmojis}
								>
									😊
								</span>
								<span onClick={this.handleClick}>发送</span>
							</React.Fragment>
						}
						value={this.state.content}
						onChange={val => this.setState({content: val})}
						onFocus={() => this.setState({isShowEmojis: false})}
					/>
					{
						this.state.isShowEmojis ? (
							<Grid
								data={this.emojis}
								onClick={item => this.setState({content: this.state.content + item.text})}
								columnNum={8}
								isCarousel={true}
								carouselMaxRow={4}
							/>
						) : null
					}
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
