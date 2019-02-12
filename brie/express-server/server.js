const express = require('express')
const app = express()
const port = 3000

function auth(req, res, next) {
    console.log('SUN')
  next();
}
function handler(req, res, next){
    res.send('Yaga Yo');
}
app.get('/', auth, handler) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))