const express = require('express');
const router = express.Router();
const teasRouter = require('./teas_router.js');
const biscuitsRouter = require('./biscuits_router.js');

router.use('/api/teas', teasRouter);
router.use('/api/biscuits', biscuitsRouter);

router.get('/', (req, res) => {
  res.sendFile('index.html');
});

module.exports = router;
