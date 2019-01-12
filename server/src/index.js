const express = require('express');
const parser = require('./parser');
const cors = require('cors');

const app = express();
app.use(cors());

let adsArray = [
    {
        address: 'Минск, Ложинская ул., 16',
        price: '303 814',
        rooms: 2,
        square: '70.9'
    }, 
    {
        address: 'Барановичи Университетский городок Брестская область Советская улица 125а',
        price: 'Договорная',
        rooms: 2,
        square: '56'
    },
    {
        address: 'д. Пекалин, Красный пер.',
        price: '62 715,89',
        rooms: 3,
        square: '72.9'
    }
];

app.get('/ads', function(req, res) {
    return res.send(adsArray);
});

app.listen(3333, function(){
    console.log('server is online');
});