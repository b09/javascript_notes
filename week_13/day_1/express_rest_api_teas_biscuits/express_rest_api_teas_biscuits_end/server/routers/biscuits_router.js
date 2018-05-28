const express = require('express');
const router = express.Router();

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

router.get('/', (req, res) => {
  res.json(biscuits);
});

router.get('/:id', (req, res) => {
  res.json(biscuits[req.params.id]);
});

router.post('/', (req, res) => {
  biscuits.push(req.body.consumable);
  res.json(biscuits);
});

router.put('/:id', (req, res) => {
  biscuits[req.params.id] = req.body.consumable;
  res.json(biscuits);
});

router.delete('/:id', (req, res) => {
  biscuits.splice(req.params.id, 1);
  res.json(biscuits);
});

module.exports = router;
