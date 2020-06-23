import React from 'react'
import { connect } from 'react-redux'

import MessageInput from './MessageInput'
import { addMessage, fetchMessages } from '../actions'

class MessageList extends React.Component {
  componentDidMount() {
    this.props.fetchMessages()
  }

  handleMessageSubmit = (msg) => {
    this.props.addMessage(msg, 1, this.props.selectedChannel)
  }
  renderInput() {
    if (this.props.selectedChannel) {
      return <MessageInput submit={this.handleMessageSubmit} />
    }
  }
  renderMessages() {
    return this.props.messages.map((message, idx) => {
      return <div key={idx}>{ message.name }</div>
    })
  }

  render() {
    return (
      <div>
        { this.renderMessages() }
        { this.renderInput() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.messages)
  let messages = state.messages.filter(message => message.postId === state.selectedChannel)
  return {
    messages: messages,
    selectedChannel: state.selectedChannel
  }
}

const mapDispatchToProps = {
  addMessage,
  fetchMessages
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)