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

class DashenInfo extends Component {

	state = {
		header: '', 
		post: '',
		info: ''
	}

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
			return <Redirect to={'/dashen'}/>
		}

		return (
			<div>
				<NavBar>搬砖工信息完善</NavBar>
				<HeaderSelector setHeader={this.setHeader}/>
				<List>
					<InputItem placeholder='请输入求职岗位' onChange={(val) => this.handleChange('post', val)}>求职岗位: </InputItem>
					<TextareaItem 
						title='个人介绍: ' 
						placeholder='请输入个人介绍'
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
)(DashenInfo)