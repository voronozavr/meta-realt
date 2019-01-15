const express = require('express');
const cors = require('cors');
const db = require('./queries');

const app = express();
app.use(cors());

app.get('/ads', db.getAds);
app.get('/regions', db.getRegions);
app.get('/localities', db.getLocalities);

app.listen(3333, () => {
  console.log('server is online');
});
