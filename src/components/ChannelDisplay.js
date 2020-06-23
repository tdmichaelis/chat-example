import React from 'react'
import { connect } from 'react-redux'

import { selectChannel } from '../actions'

const ChannelDisplay = props => {
  let { id, title } = props.channel
  return (
    <div className="channel-display">
      <div onClick={() => props.selectChannel(id)}>{ title }</div>
    </div>
  )
}

export default connect(null, { selectChannel })(ChannelDisplay)