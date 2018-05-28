const express = require('express');
const router = express.Router();

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

router.get('/', (req, res) => {
  res.json(teas);
});

router.get('/:id', (req, res) => {
  res.json(teas[req.params.id]);
});

router.post('/', (req, res) => {
  teas.push(req.body.consumable);
  res.json(teas);
});

router.put('/:id', (req, res) => {
  teas[req.params.id] = req.body.consumable;
  res.json(teas);
});

router.delete('/:id', (req, res) => {
  teas.splice(req.params.id, 1);
  res.json(teas);
});

module.exports = router;
