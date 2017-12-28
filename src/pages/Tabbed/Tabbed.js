import React, { Component } from 'react'
import TabBar from '../../components/TabBar/TabBar'

import './Tabbed.css'

import tabItems from '../../static/TabItems.json'
class Tabbed extends Component {
  state = {
    activeTab: tabItems[0],
  }

  onTabItemClick = (item) => {
    this.setState({ activeTab: item })
  }

  render() {
    const { activeTab } = this.state
    return (
      <div className='tabbed'>
        <TabBar
          items={tabItems}
          activeTab={activeTab}
          onTabItemClick={this.onTabItemClick}
        />
        {
          activeTab && activeTab.content &&
          <div className='tab-content__wrapper'>
            {
              activeTab.content.map((item) => {
                return (
                  <div className='tab-content__item'>
                    <h4 className='tab-content__item__title'>{item.title}</h4>
                    <p className='tab-content__item__description'>{item.description}</p>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    )
  }
}

export default Tabbed
