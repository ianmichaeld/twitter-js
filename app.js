const express = require( 'express' );
const chalk = require( 'chalk' );
const volleyball = require( 'volleyball' );
const app = express(); // creates an instance of an express application

const port = 3000;

// app.use( (req, res, next) => {
//   console.log( req.method, req.path, res.statusCode );
//   next();
// })
app.use(volleyball);

app.get('/', ( req, res, next) => {
  res.send('You are here!');
})

app.get('/news', ( req, res, next) => {
  res.send('You want news?');
})


app.listen(3000);
console.log(`Server running on port: ${port}`);
