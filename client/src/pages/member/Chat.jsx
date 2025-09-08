import React from 'react'
import UsersSidebar from '../../components/members/Chats/UsersSidebar'
import ChatWindow from '../../components/members/Chats/ChatWindow'

const Chat = () => {
  return (
    <div className='flex justify-between gap-1 p-1'>
      <UsersSidebar/>
      <ChatWindow/>
    </div>
  )
}

export default Chat
