const express = require('express')
const app = express()
const port = 3000

function auth(req,res, next) {
  console.log(req.headers.boi);
  if (req.headers.boi == 'chicken') {
    next();
  } else {
    res.status(401);
    res.send("get your bubblegum looking head out of here boooooiiiiii")
  }
}

function handler(req,res,next){
  const list = [
    {
      todo: "punch billy",
      completed: true
    },
    {
      todo: "stare at wall",
      ongoing: true
    },
    {
      todo: "punch you in the face",
      completed: false 
    },
      {
        todo: "reach into the darkest depths of oblivion to personally gain contact with hermaeus mora himself for infinite knowlege and power of the universe",
      completed: true

    },
  ];
    res.status(200);
    res.json(list);
}

app.get('/', auth,handler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
