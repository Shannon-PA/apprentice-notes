const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(cors());

function auth(req, res, next) {
  next();
  // if (req.headers.authorization == 'yaga') {
  //   next();
  // } else {
  //   res.status(401);
  //   res.json(
  //     {message: 'Incorrect password boi!'}
  //     );
  // }
}

function handler(req, res, next) {
  const todos = [
    {
      item: "Play Killing Floor 2",
      completed: false
    },
    {
      item: "Get better at Tannenberg",
      completed: false
    },
    {
      item: "Make a server",
      completed: true
    }
  ];

  res.status(200);
  res.json(todos);
}

app.get('/', auth, handler)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))