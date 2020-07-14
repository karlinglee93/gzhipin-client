import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
	NavBar,
	List,
	InputItem,
	TextareaItem,
	Button
} from 'antd-mobile'
import {updateUser} from '../../redux/actions'
import {Redirect} from 'react-router-dom'

import HeaderSelector from '../../components/header-selector/header-selector'

class LaobanInfo extends Component {

	state = {
		header: '', // 头像名称 
		post: '', // 职位名称 
		company: '', // 公司名称 
		salary: '', // 工资
		info: '' // 职位简介 
	}

	// 更新header状态
	setHeader = (header) => {
		this.setState({
			header
		})
	}

	handleChange = (name, val) => {
		this.setState({
			[name]: val
		})
	}

	handleSave = () => {
		this.props.updateUser(this.state)
	}

	render () {
		const {user} = this.props
		if (user.header) {
			return <Redirect to={'/laoban'}/>
		}

		return (
			<div>
				<NavBar>金主信息完善</NavBar>
				<HeaderSelector setHeader={this.setHeader}/>
				<List>
					<InputItem placeholder='请输入招聘职位' onChange={(val) => this.handleChange('post', val)}>招聘职位: </InputItem>
					<InputItem placeholder='请输入公司名称' onChange={(val) => this.handleChange('company', val)}>公司名称: </InputItem>
					<InputItem placeholder='请输入职位薪资' onChange={(val) => this.handleChange('salary', val)}>职位薪资: </InputItem>
					<TextareaItem 
						title='职位要求: ' 
						placeholder='请输入职位要求'
						rows={3}
						onChange={(val) => this.handleChange('info', val)}
					/>
				</List>
				<Button type='primary' onClick={this.handleSave}>保&nbsp;&nbsp;&nbsp;存</Button>
			</div>
		)
	}
}

export default connect(
	state => ({user: state.user}),
	{updateUser}
)(LaobanInfo)