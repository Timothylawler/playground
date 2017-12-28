import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TabItem from './TabItem/TabItem'

import './TabBar.css'

export default class TabBar extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        route: PropTypes.string,
      })
    ).isRequired,
    activeTab: PropTypes.shape(),
    onTabItemClick: PropTypes.func,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { items, activeTab } = this.props
    return (
      <div className='tab-bar'>
        { items && items.map(item =>
            <TabItem
              className='tab-bar__item'
              key={`${item.title}${item.route}`}
              title={item.title}
              route={item.route}
              onClick={() => this.props.onTabItemClick(item)}
              isActive={activeTab === item}
            />
          )
        }
      </div>
    )
  }
}
