import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
	NavBar,
	List,
	InputItem,
	Button
} from 'antd-mobile'

import HeadSelector from '../../components/head-selector/head-selector'

class DashenInfo extends Component {
	render () {
		return (
			<div>
				<NavBar>搬砖工信息完善</NavBar>
				<HeadSelector />
				<List>
					<InputItem placeholder='请输入求职岗位'>求职岗位: </InputItem>
					<InputItem placeholder='请输入个人介绍'>个人介绍: </InputItem>
				</List>
				<Button>保&nbsp;&nbsp;&nbsp;存</Button>
			</div>
		)
	}
}

export default connect(
	state => ({}),
	{}
)(DashenInfo)