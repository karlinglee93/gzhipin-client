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
		return (
			<div id='chat-page'>
				<NavBar>name</NavBar>
				<List>
					<Item
						thumb={require('../../assets/images/headers/头像1.png')}
					>
						hi
					</Item>
					<Item
						thumb={require('../../assets/images/headers/头像1.png')}
					>
						how are you?
					</Item>
					<Item
						className='chat-me'
						extra='我'
					>
						hello
					</Item>
					<Item
						className='chat-me'
						extra='我'
					>
						I'm fine
					</Item>
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
	user: state.user
})

const mapDispatchToProps = {
	sendMsg
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
