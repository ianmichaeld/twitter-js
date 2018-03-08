const express = require('express');
const chalk = require('chalk');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render('index', {
    title: 'Welcome to Twitter.js!',
    tweets: tweets,
    showForm: true
  });
});

// router.get('/stylesheets/style.css', function ( req, res, next ) {
//   res.render( 'layout' )
// })

router.get('/users/:username', function(req, res) {
  var tweetsByName = tweetBank.find({ name: req.params.username });
  res.render('index', {
    title: `Tweets by ${req.params.username}`,
    tweets: tweetsByName,
    username: req.params.username,
    showForm: true
  });
});

router.get('/tweets/:id', function(req, res) {
  var id = Number(req.params.id);
  var tweetsById = tweetBank.find({ id: id });
  res.render('index', {
    title: `Tweets by Index ${id}`,
    tweets: tweetsById
  });
});

router.post('/tweets', function(req, res, next) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
  console.log(chalk.blue('Form Submitted!'));
});

module.exports = router;
