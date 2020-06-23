import React from 'react'

import ChannelList from './ChannelList'

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ChannelList />
      </div>
    )
  }
}

export default SideBar