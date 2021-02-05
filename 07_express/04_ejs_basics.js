const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

  let students = [
    { name: 'Alessio', grade: '3'},
    { name: 'Jasmin', grade: '4'},
    { name: 'Damir', grade: '5'},
    { name: 'Peter', grade: '2'},
    { name: 'Kata', grade: '2.5'},
  ]

  let message = "Express is very simple and has many uses!"

  res.render('index.ejs',{
    students: students,
    message: message
  })
})

app.get('/about', (req, res) => {
  res.render('about.ejs')
})
/* 1. Add route for the about page */
/* 2. Render about.ejs when /about is accessed */
/* 3. Create links in the HTML for both pages */

app.listen(3000, ()=> {
  console.log('App is running on http://127.0.0.1:3000')
})