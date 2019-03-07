const express = require("express");
const cors = require("cors");

server = express();

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}


function auth(req, res, next){
    if(req.token != "Secret Agent Man"){
        res.status(401).send();
    } else {
        next();
    }
}

function list(req, res){
    const myResponse = {
        message: "Odds are he won't live to see tomorrow",
        list: [
            "Something",
            "Another thing",
            "Realize I'm bad at todo lists",
            "Scream internally",
            "Yet another thing"
        ]
    }
    res.json(myResponse);
}

server.use(cors(corsOptions));

server.get('/', auth, list);

server.get("/signin", (req, res) => {
    if (req.headers.username == "something" && req.headers.password == "Password01"){
        res.status(200).json({token: "Secret Agent Man"});
    } else {
        res.status(400).send();
    }
});

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