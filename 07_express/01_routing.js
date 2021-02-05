const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('You accessed localhost:3000 using GET')
})

app.post('/', (req, res) => {
  res.send('You accessed localhost:3000 using POST')
})

app.get('/about', (req, res) => {
  res.send('You are in the about page somewhere :D')
})

app.listen(3000, ()=> {
  console.log('App is running on http://127.0.0.1:3000')
})
 
