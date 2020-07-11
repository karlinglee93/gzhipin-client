import React, { Component } from 'react'
import {
	List,
	Grid
} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component {
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

	state = {
		header: {} // 图片对象
	}

	handleClick = (el) => {
		this.setState({
			header: el
		})
		this.props.setHeader(el.text)
	}

	render() {
		const {header} = this.state
		const listHeader = !header
			? '请选择头像' 
			: (
				<div>
					已选择头像<img src={header.icon} alt={header.text}/>
				</div>
			)

		return (
			<div>
				<List renderHeader={() => listHeader}>
					<Grid 
						data={this.headers}
						columnNum={5}
						onClick={this.handleClick}
					/>
				</List>
			</div>
		)
	}

	static propTypes = {
		setHeader: PropTypes.func.isRequired
	}
}
