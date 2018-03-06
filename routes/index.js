const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

// router.get('/stylesheets/style.css', function ( req, res, next ) {
//   res.render( 'layout' )
// })

router.get( '/users/:name', function (req, res) {
  console.log(tweetBank.find(tweet => tweet.name.indexOf(req.params.name) > -1));
});

module.exports = router;
