//importing modules
const express = require('express'); //express -> web app framework of nodejs
const http = require('http'); //http -> module from nodejs that creates webserver
const cors = require('cors'); //cors -> cross origin reference sharing
const { Server } = require("socket.io") //Server interface already exists in socketio lib

const app = express() //instance of express -> configure routes, middlware
app.use(cors()); //cors is a middleware

//creating http server on port 300) -> reacts runs here
const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log("Server started running")
})
//instantiating the server created above
const io = new Server(server, {
    //Specifying the credentials and settings needs to be there in our project
    cors: {
        origin: "https://localhost:3000", 
        //which server is gonna be calling our socket.io server -> here, it's our local react host
        methods: ['GET', "POST"],
    },
});

//inorder to see the file running, update scripts in package.json
// "start" : "nodemon index.js" -> when npm start is given nodemon should run the file index.js