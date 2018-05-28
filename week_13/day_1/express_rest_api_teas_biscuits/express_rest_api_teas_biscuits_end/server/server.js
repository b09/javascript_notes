const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const indexRouter = require('./routers/index_router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(bodyParser.json());
app.use(indexRouter);

app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});
