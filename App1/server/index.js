//importing modules
const express = require('express'); //express -> web app framework of nodejs
const http = require('http'); //http -> module from nodejs that creates webserver
const cors = require('cors'); //cors -> cross origin reference sharing
const { Server } = require("socket.io") //Server interface already exists in socketio lib

const app = express() //instance of express -> configure routes, middlware
app.use(cors()); //cors is a middleware

//creating http server on port 3000) -> reacts runs here
const server = http.createServer(app);

//instantiating the server created above
const io = new Server(server, {
    //Specifying the credentials and settings needs to be there in our project
    cors: {
        origin: "http://localhost:3000", 
        //which server is gonna be calling our socket.io server -> here, it's our local react host
        methods: ['GET', "POST"],
    },
});

//initiate and detect if anyone is connected -> all other events only when if there is a connection
io.on("connection", (socket) =>{
    console.log(socket.id, "Connection established")
    //when user disconnects (eg-> closing tab)
    socket.on("disconnect", ()=>{
        console.log(`User disconnected ${socket.id}`);
    })
})

//
server.listen(3001, ()=>{
    console.log("Server started running")
})