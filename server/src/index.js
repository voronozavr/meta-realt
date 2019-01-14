const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./queries');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get('/ads', db.getAds);
app.get('/ads/:id', db.getAdById);

app.listen(3333, () => {
  console.log('server is online');
});
