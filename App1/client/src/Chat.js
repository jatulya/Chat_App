import React, { useEffect, useState } from 'react'

function Chat({socket, username, room}) {

  const [currentMsg, setCurrentMsg] = useState("")
  const [msgList, setMsgList] = useState([])  //for storing the msgs sent before
  
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
        setMsgList((list) => [...list, msgData]);
    }
  }
 
  useEffect(()=> {
    
    socket.on("receive_msg", (data) => {
      //when a msg is received, we append it to the msgList
       //prev -> the current state of the msglist, then it adds the msg to the end
      //msgList contains the data with author, room and msg type, not just msg
      //we only display the msg from it
      setMsgList((list) => [...list, data]);
      console.log(msgList)
    })
    return () => {
      socket.off("receive_msg");
    }; //this function prevents further sending off the same msgs
  }, [socket])

  return (   
    <div className='chat-window'>       
        <div className='chat-header'>
            <p>Let's chat in {room}</p>
        </div>  
        
        <div className='chat-body'>
          {msgList.map ((msgContent)=>{
            return (
              <div className='message'
              id = {msgContent.author === username ? "you" : "other"}>
                <div>
                <div className='message-content'>
                  <p>{msgContent.msg}</p>
                </div>
                <div className='message-meta'>
                  <p id="time">{msgContent.time}</p>
                  <p id="author"> {msgContent.author}</p>
                </div>
                </div>
              </div>
            )
          })}
        </div>      
        
        <div className='chat-footer'>           
            <input 
                type="text" 
                placeholder='Write your message'
                onChange = {(e) => {setCurrentMsg(e.target.value)}}
                onKeyPress = {(e) => {
                  e.key === "Enter" && sendMsg()
                }}
            />
            <button onClick={sendMsg}>&#9658;</button>       
        </div>             
    </div>
  )
}

export default Chat
