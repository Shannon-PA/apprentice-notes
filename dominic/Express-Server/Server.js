const express = require('express')
const app = express()
const port = 3000

function auth(req,res, next) {
    console.log(req.headers.boi)
    next();
}

function handler(req,res,next){
    res.send("Your dad")
}

app.get('/', auth,handler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


//app.get('/', (req, res) => res.send('Wassup!'))

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))