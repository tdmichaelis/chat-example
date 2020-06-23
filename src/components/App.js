import React from 'react'

import MessageList from './MessageList'
import Sidebar from './SideBar'

const App = () => {
  return (
    <div className="friday-app">
      <Sidebar />
      <MessageList />
    </div>
  )
}

export default App