import React, { Component } from 'react'
import TabBar from '../../components/TabBar/TabBar'

const tabItems = [
  {
    title: 'Hello',
    route: '/someRoute'
  },
  {
    title: 'Chello',
    route: '/someRoute'
  },
  {
    title: 'Whello',
    route: '/someRoute'
  },
]
class Tabbed extends Component {
  render() {
    return (
      <div>
        <TabBar items={tabItems} />
      </div>
    )
  }
}

export default Tabbed
