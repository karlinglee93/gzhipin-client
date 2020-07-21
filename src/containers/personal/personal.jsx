import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Result, List, WhiteSpace, Button} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

export class Personal extends Component {
	render() {
		return (
			<div>
				<Result 
					img={<img src={require(`../../assets/images/headers/头像1.png`)} style={{width: 50}} alt='header' />}
					title='Username'
					message='Company'
				/>
				<List renderHeader={() => '相关信息'}>
					<Item multipleLine>
						<Brief>职位: post</Brief>
						<Brief>简介: info</Brief>
						<Brief>薪资: salary</Brief>
					</Item>
				</List>
				<WhiteSpace />
				<Button type='warning'>退出登录</Button>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Personal)
