const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const adsArray = [
  {
    id: 1,
    address: 'Минск, Ложинская ул., 16',
    price: '303 814',
    rooms: 2,
    square: '70,9',
  },
  {
    id: 2,
    address: 'Барановичи Университетский городок Брестская область Советская улица 125а',
    price: 'Договорная',
    rooms: 2,
    square: '56',
  },
  {
    id: 3,
    address: 'д. Пекалин, Красный пер.',
    price: '62 715,89',
    rooms: 3,
    square: '72,9',
  },
];

app.get('/ads', (req, res) => (
  res.send(adsArray)
));

app.listen(3333, () => {
  console.log('server is online');
});
