const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const gamesRouter = function (gamesCollection) {

  router.get('/', (req, res) => {
    gamesCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    gamesCollection
      .findOne({ _id: ObjectID(id) })
      .then((docs) => res.json(docs));
  });

  router.post('/', (req, res) => {
    const newGame = req.body.game;
    gamesCollection
      .insertOne(newGame)
      .then(() => {
        gamesCollection
          .find()
          .toArray()
          .then((docs) => res.json(docs));
      });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    gamesCollection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => {
        gamesCollection
          .find()
          .toArray()
          .then((docs) => res.json(docs));
      });
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedGame = req.body.game;
    gamesCollection
      .updateOne(
        { _id: ObjectID(id) },
        { $set: updatedGame }
      )
      .then(() => {
        gamesCollection
        .find()
        .toArray()
        .then((docs) => res.json(docs));
      });
  });

  return router;

};

module.exports = gamesRouter;
