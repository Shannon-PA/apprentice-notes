const express = require("express");

server = express();

function auth(req, res, next){
    if(req.headers.name != "Secret Agent Man"){
        //res.locals sets a variable from middleware that holds state throughout the life of a request
        console.log(req.headers.name);
        res.locals.message = "Who are you";
    }
    next();
}

function logger(req, res){
    let message;

    if(res.locals.message){
        message = res.locals.message;
        //res.set sets a header up, in this case it's set up a header called hint
        res.set('Hint', 'He\'s giving you a number and taking away your name');
    } else {
        message = "Odds are he won't live to see tomorrow";
    }
    res.send(message);
}

server.get("/", auth, logger);

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