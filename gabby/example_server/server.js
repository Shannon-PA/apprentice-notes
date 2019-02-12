const express = require("express");

server = express();


server.get('/knock_knock', (req, res) => {
    res.send("Whose (who's???) this?"); 
})

server.get('/why', (req, res) => {
    res.send("are you like this?");
})

server.get('*', (req, res) => {
    res.send("Try again later")
})

server.listen(8000, () => {
    console.log("Server listening on port 8000");
})