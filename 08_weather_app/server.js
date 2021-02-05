// Node Packages:
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
// Server Settings
const app = express()
const apiKey = '108c1179d5f49e7ba876cdd2b2e7f156'
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.set('view-engine','ejs')


// 1. Route Get '/'

app.get('/', (req, res) => {
  res.render('index.ejs', {
    error: null,
    data : null
  })
})

// 2. Route Post '/'

app.post('/', (req, res) => {
  const city = req.body.city
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  console.log(city)

  request(url, (err, response, body)=> {
    if (err) {
      // console.log('error:', err)
      res.render('index.ejs', {
        error: 'There was an error connecting to the api',
        data: null
      })

    } else { 
      // Get Weather from request body
      const weather = JSON.parse(body)
      if (weather.main == undefined){
        // create Error for "city not found"
        res.render('index.ejs', {
          error: 'City was not found',
          data: null
        })
      } else {
        
        // Create Object to send
        const data = {
          temp : weather.main.temp,
          description: weather.weather[0].description, 
          location: `${weather.name}, ${weather.sys.country}`
        }
        res.render('index.ejs', {
          error: null,
          data : data
        })

      }
    }
  })


})

// Server Starten

app.listen( 3000, () => {
  console.log('The app running: http://127.0.0.1:3000')

})