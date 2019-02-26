const express = require('express')
const app = express()
const port = 3000

function auth(req, res, next) {
    console.log(req.headers.water)
    if (req.headers.water =='cooking') {
        next();
    } else {
        res.status(401);
        res.send("GET OUT!!!!!!")
    }
}

function handler(req, res, next){
    const list = [
        {
            todo: "die",
            completed: false
        },
        {
            todo: "Live",
            completed: true   
        },
    ];
    res.status(200);
    res.json(list);

}
app.get('/', auth, handler) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))