const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const sightingsRouter = function (sightingsCollection) {

  router.get('/', (req, res) => {
    sightingsCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    sightingsCollection
      .findOne({ _id: ObjectID(id) })
      .then((docs) => res.json(docs));
  });

  router.post('/', (req, res) => {
    const newSighting = req.body.sighting;
    sightingsCollection
      .insertOne(newSighting)
      .then(() => {
        sightingsCollection
          .find()
          .toArray()
          .then((docs) => res.json(docs));
      });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    sightingsCollection
      .deleteOne({ _id: ObjectID(id) })
      .then(() => {
        sightingsCollection
          .find()
          .toArray()
          .then((docs) => res.json(docs));
      });
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedSighting = req.body.sighting;
    sightingsCollection
      .updateOne(
        { _id: ObjectID(id) },
        { $set: updatedSighting }
      )
      .then(() => {
        sightingsCollection
        .find()
        .toArray()
        .then((docs) => res.json(docs));
      });
  });

  return router;

};

module.exports = sightingsRouter;
