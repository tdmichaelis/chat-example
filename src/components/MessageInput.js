import React from 'react'

class MessageInput extends React.Component {
  state = {
    message: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.message) {
      this.props.submit(this.state.message)
      this.setState({
        message: ''
      })
    }
  }
  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  render() {
    return (
      <div className="message-input">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.message} />
        </form>
      </div>
    )
  }
}

export default MessageInput