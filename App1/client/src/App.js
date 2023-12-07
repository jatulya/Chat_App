import './App.css';
import io from "socket.io-client"; //for estavblishing connection

//establishing connection
const socket = io.connect("http://localhost:3000");
function App() {
  return (
    <div className="App">
     My Chat App
    </div>
  );
}

export default App;
