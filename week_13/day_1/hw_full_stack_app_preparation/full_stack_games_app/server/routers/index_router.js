const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const gamesRouter = require('./games_router.js');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    console.error(err);
  }
  
  const db = client.db('games_hub');
  const gamesCollection = db.collection('games');
  router.use('/api/games', gamesRouter(gamesCollection));
});

module.exports = router;
