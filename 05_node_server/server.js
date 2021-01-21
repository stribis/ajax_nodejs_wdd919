// Get the http module (Standard native module)
const http = require('http')

// Set up your hostname and port
const hostname = '127.0.0.1'
const port = 3000

// Create Server

const server = http.createServer( (req, res) => {
  // if someone connects to out server send status code 200!
  res.statusCode  = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
} )

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`)
})
