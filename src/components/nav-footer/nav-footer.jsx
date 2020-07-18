import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'

const {Item} = TabBar

class NavFooter extends Component {
	static propTypes = {
		navList: PropTypes.array.isRequired
	}

	render() {
		const {navList} = this.props
		const {pathname} = this.props.location

		return (
			<TabBar>
				{
					navList.map(nav => (
						<Item 
							key={nav.path}
							title={nav.text}
							icon={{uri: require(`./images/${nav.icon}.png`)}}
							selectedIcon={{uri: require(`./images/${nav.icon}-selected.png`)}}
							selected={pathname === nav.path}
							onPress={() => this.props.history.replace(nav.path)}
						/>
					))
				}
			</TabBar>
		)
	}
}

// 向外暴露由withRouter()包装产生的组件
// 内部会向组件中传入一些路由组件特有的属性: history/location/math
export default withRouter(NavFooter)