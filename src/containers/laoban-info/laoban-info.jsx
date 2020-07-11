import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
	NavBar,
	List,
	InputItem,
	TextareaItem,
	Button
} from 'antd-mobile'

import HeadSelector from '../../components/head-selector/head-selector'

class LaobanInfo extends Component {
	render () {
		return (
			<div>
				<NavBar>金主信息完善</NavBar>
				<HeadSelector />
				<List>
					<InputItem placeholder='请输入招聘职位'>招聘职位: </InputItem>
					<InputItem placeholder='请输入公司名称'>公司名称: </InputItem>
					<InputItem placeholder='请输入职位薪资'>职位薪资: </InputItem>
					<TextareaItem 
						title='职位要求: ' 
						placeholder='请输入职位要求'
						rows={3}
					/>
				</List>
				<Button type='primary'>保&nbsp;&nbsp;&nbsp;存</Button>
			</div>
		)
	}
}

export default connect(
	state => ({}),
	{}
)(LaobanInfo)