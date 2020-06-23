import { combineReducers } from 'redux'

function usersReducer(users = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...users,
        action.payload.user
      ]
    case 'DELETE_USER':
      return users.filter(user => user.id !== action.payload.id)
    default:
      return users
  }
}

function channelsReducer(channels = [], action) {
  switch (action.type) {
    case 'ADD_CHANNEL':
      return channels
    case 'DELETE_CHANNEL':
      return channels
    default:
      return [
        { title: 'Channel 1', id: 1 },
        { title: 'Channel 2', id: 2 }
      ]
  }
}

function selectedChannel(selectedChannel = null, action) {
  if (action.type === 'SELECT_CHANNEL') {
    return action.payload.id
  }
  return selectedChannel
}

function messagesReducer(messages = [], action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...messages,
        action.payload.message
      ]
    case 'DELETE_MESSAGE':
      return messages.filter(message => message.id !== action.payload.id)
    case 'FETCH_MESSAGES':
      return action.payload.messages
    default:
      return messages
  }
}

export default combineReducers({
  users: usersReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannel,
  messages: messagesReducer
})