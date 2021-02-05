const express = require('express')
const app = express()

const myLogger = function (req, res, next){
  console.log('Logger has been activated')
  next()
}


app.use(myLogger)


app.get('/', (req, res) => {
  res.send('You accessed localhost:3000 using GET')
})

app.listen(3000, ()=> {
  console.log('App is running on http://127.0.0.1:3000')
})