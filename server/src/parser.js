const unirest = require('unirest');
const cheerio =  require('cheerio');

module.exports.parseAds = function(url) {
    unirest.post(url).end(function(response){
        const body = response.body;
        const $ = cheerio.load(body);
        return $('title').text();
    });
};