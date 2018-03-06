const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

// router.get('/stylesheets/style.css', function ( req, res, next ) {
//   res.render( 'layout' )
// })

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( (tweet) => tweet.name === name);
  res.render( 'index', { tweets: list } );
});

router.get('/tweets/:id', function(req, res) {
  var id = Number(req.params.id);
  var list = tweetBank.find( (tweet) => tweet.id === id);
  res.render( 'index', { tweets: list } );
});

module.exports = router;
