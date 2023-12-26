import './App.css';
import { useState } from "react";
import io from "socket.io-client"; //for estavblishing connection
import Chat from "./Chat";

//establishing connection between the host and server
const socket = io.connect("http://localhost:3001"); //where the server is running
function App() {

  //representing the states -> automatically importing from react
  /*username: state variable that will hold the current val of the username. Initially, it is set to an empty string.
  setUsername: function that is used to update the value of username. When setUsername(newValue) is called, React will re-render the component with the updated value.*/
  const [username, setUsername] = useState("");  //useState is a react hook that manages state
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false) //when showChat = false, only joinChat will be shown

  const joinRoom = () => {
    //if val exists in username and room, do this stuff
    if (username!=="" && room!=="")
    {
      //emit is socket.io fnct used to send custom events from client to server or vice-versa      
      socket.emit("join_room", room); //the value in the room is sent as data to the server side
      setShowChat(true); //showChat is set to true. now chat window will be displayed
    }
  };

  return (
    <div className="App">
      { !showChat ? (
      <div className='joinChatContainer'>       
        <h3>Join Chat</h3> 
        
        <input 
            type='text' 
            placeholder='Enter username' 
            onChange = {(e) => {setUsername(e.target.value)}}
          />
        
        <input type='text' placeholder='Room ID: ' onChange = {(e) => {setRoom(e.target.value)}}/>
        
        <button onClick={joinRoom}>Join the Room</button>
      </div> ) :
      (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
