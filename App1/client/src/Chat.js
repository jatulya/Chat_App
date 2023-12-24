import React from 'react'

function Chat({socket, username, room}) {
  return (
    <div>
        <div className='chat-header'>
            <p>Let's chat {username}</p>
        </div>  
        <div className='chat-body'></div>      
        <div className='chat-footer'>
            <input type="text" placeholder='Write your message'/>
            <button>&#9658;</button>
        </div>          
    </div>
  )
}

export default Chat
