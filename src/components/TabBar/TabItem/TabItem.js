import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './TabItem.css'

export default class TabItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    className: null,
    isActive: false,
  }

  render() {
    const { className, isActive, onClick } = this.props
    return (
      <div
        className={`tab-item ${className} ${isActive? 'tab-item--active': ''}`}
        onClick={onClick}
      >
        { this.props.title }
      </div>
    )
  }
}
