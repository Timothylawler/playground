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
  }

  constructor(props) {
    super(props)
    if (props.items) {
      this.state = {
        activeItem: props.items[0],
      }
    }
  }

  onTabItemClick = (item) => {
    this.setState({ activeItem: item })
  }

  render() {
    const { items } = this.props
    const { activeItem } = this.state
    return (
      <div className='tab-bar'>
        { items && items.map(item =>
            <TabItem
              className='tab-bar__item'
              key={`${item.title}${item.route}`}
              title={item.title}
              route={item.route}
              onClick={() => this.onTabItemClick(item)}
              isActive={activeItem === item}
            />
          )
        }
      </div>
    )
  }
}
