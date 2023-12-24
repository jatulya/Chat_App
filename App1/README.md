In the server folder ->
 1. npm init : creates a package.json file
 2. npm install socket.io nodemon express corse (confirm it)
 3. inorder to see the file running, update scripts in package.json
    "start" : "nodemon index.js" -> when npm start is given nodemon should run the file index.js

In the client ->
 1. create react app
 2. delete unwanted files from src (dont del -> App.js and css, index.js, reportWebVitals.js )
 3. To establish the connection between the front end and the user, 
    npm install socket.io-client
 IN App.js
 4. Connection established using io.connect after importing socket.io
    Example: const socket = io.connect("http://localhost:5000");
 5. Created an interface for asking the user to enter their username and room id 
    room, in socket id, is the place where people with the same room id can join the conversation
    here we are allocating room manually, room allocation can be done automatically
    done using useState, socket.emit inside a joinRoom() function. 
 6. The parameteric function of socket.emit [eg.join_room] is defined in the index.js in server
 
 Buillding the Chat
 7. Component named Chat.js is created in client (shortcut to wirte basic code -> rfce). This is the component where we would be receiving and sending messages through socketio
 8. we need to pass socket, username and room variables created in App component as props to the Chat function (props are variables passed to child components). Import Chat in App and pass the prop
 9. Inside the Chat component, build the chat. Three divs are created - header, body, footer.
 10. Footer contains the area we type our message [a code -> &#9658 is for right-pointing arrow]