const unirest = require('unirest');
const cheerio = require('cheerio');

module.exports.parseAds = (url) => {
  unirest.post(url).end((response) => {
    const $ = cheerio.load(response.body);
    return $('title').text();
  });
};
