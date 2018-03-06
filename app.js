const express = require( 'express' );
const chalk = require( 'chalk' );
const volleyball = require( 'volleyball' );
const nunjucks = require( 'nunjucks' );

const app = express(); // creates an instance of an express application

const port = 3000;
const routes = require('./routes');

// app.use( (req, res, next) => {
  //   console.log( req.method, req.path, res.statusCode );
  //   next();
  // })
app.use(volleyball);

app.use('/', routes);

app.use( '/special', (req, res, next) => {
  res.send( 'Aren\'t you special?');
  console.log( chalk.blue( 'Special area entered' ) );
  next();
})
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
  nocache: true,
}); // point nunjucks to the proper directory for templates

app.listen(3000);
console.log(`Server running on port: ${port}`);
