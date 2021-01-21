const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<p>Hello World</p>')
})

app.listen(3000, ()=> {
  console.log('App is running on http://127.0.0.1:3000')
})