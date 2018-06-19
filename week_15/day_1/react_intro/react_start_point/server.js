const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.use(express.static('client/build'));

app.listen(3000, function () {
  const port = this.address().port;
  console.log(`Example app listening on port ${port}`);
});
