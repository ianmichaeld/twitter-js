const express = require('express');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {
  nocache: true
}); // point nunjucks to the proper directory for templates

app.use(morgan(':method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(express.static('public'));

app.listen(3000, () =>
  console.log(chalk.magenta('Server started on Port 3000'))
);
