import Axios from "axios"

export const addMessage = (text, userId, channelId) => {
  return {
    type: 'ADD_MESSAGE',
    payload: {
      message: {
        name: text,
        userId,
        postId: channelId
      }
    }
  }
}

export const selectChannel = (id) => {
  return {
    type: 'SELECT_CHANNEL',
    payload: {
      id
    }
  }
}

export const fetchMessages = () => {
  return async (dispatch, getState) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    let data = await response.json()
    dispatch({
      type: 'FETCH_MESSAGES',
      payload: {
        messages: data
      }
    })
  }
}

// export const saveMessage = (text, userId, channelId) => {
//   return async (dispatch, getState) => {
//     let reponse = await Axios.post('https://google.com/message')
//     dispatch({
//       type: 'ADD_MESSAGE',
//       payload: {
//         message: {
//           text,
//           userId,
//           channelId
//         }
//       }
//     })
//   }
// }