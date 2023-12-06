//importing modules
const express = require('express'); //express -> web app framework of nodejs
const http = require('http'); //http -> module from nodejs that creates webserver
const cors = require('cors'); //cors -> cross origin reference sharing 
const app = express() //instance of express -> configure routes, middlware
app.use(cors()); //cors is a middleware

const server = http.createServer(app);
server.listen(3001, ()=>{
    console.log("Server started running")
})
//inorder to see the file running, update scripts in package.json
// "start" : "nodemon index.js" -> when npm start is given nodemon should run the file index.js