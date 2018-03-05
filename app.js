const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use( (req, res, next) => {
  console.log( req.method, req.path, res.statusCode )
  next()
})

app.get('/', ( req, res, next) => {
  res.send('You are here!')
})

app.get('/news', ( req, res, next) => {
  res.send('You want news?')
})


app.listen(3000)
console.log('Server running')
