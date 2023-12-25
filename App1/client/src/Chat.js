import React, { useEffect, useState } from 'react'

function Chat({socket, username, room}) {

  const [currentMsg, setCurrentMsg] = useState("")
  
  const sendMsg = async () => { //async because we need to wait for the msg to be sent
    
    if (currentMsg!=="") {       
        const msgData = { // we are sending this to the socket
            room: room,
            author: username,
            msg: currentMsg,
            time: new Date(Date.now()).getHours() + 
                  ":" + new Date(Date.now()).getMinutes(), //shows 11:45 like that
        }
        
        await socket.emit('send_msg', msgData)
    }
  }
 
  useEffect(()=> {
    socket.on("receive_msg", (data) => {
      console.log(`Message received ${JSON.stringify(data)}`)
    })
  }, [socket])

  return (   
    <div>       
        <div className='chat-header'>
            <p>Let's chat {username}</p>
        </div>  
        
        <div className='chat-body'></div>      
        
        <div className='chat-footer'>           
            <input 
                type="text" 
                placeholder='Write your message'
                onChange = {(e) => {setCurrentMsg(e.target.value)}}
            />
            
            <button onClick={sendMsg}>&#9658;</button>       
        </div>             
    </div>
  )
}

export default Chat
