import React, { Component } from 'react'
import {
	List,
	Grid
} from 'antd-mobile'

export default class HeadSelector extends Component {
	constructor(props) {
		super(props)
		// 准备需要显示的数据
		this.headers = []
		for (let i = 0; i < 20; i++) {
			this.headers.push({
				text: `头像${i+1}`,
				icon: require(`../../assets/images/headers/头像${i+1}.png`)
			})
		}
	}

	render() {
		return (
			<div>
				<List renderHeader={() => '请选择头像'}>
					<Grid 
						data={this.headers}
						columnNum={5}
					/>
				</List>
			</div>
		)
	}
}
