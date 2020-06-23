import React from 'react'
import { connect } from 'react-redux'

import ChannelDisplay from './ChannelDisplay'

class ChannelList extends React.Component {
  renderChannels() {
    return this.props.channels.map(channel => {
      return (
        <div key={channel.id}>
          <ChannelDisplay channel={channel} />
        </div>
      )
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        { this.renderChannels() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps)(ChannelList)