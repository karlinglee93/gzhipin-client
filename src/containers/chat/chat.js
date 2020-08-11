import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavBar, List, InputItem} from 'antd-mobile'

const Item = List.Item

export class Chat extends Component {
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
					/>
				</div>
				
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
