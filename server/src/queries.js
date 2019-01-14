const PoolConst = require('pg').Pool;

const pool = new PoolConst({
  user: 'postgres',
  host: 'localhost',
  database: 'meta-realt',
  password: 'root',
  port: 5432,
});

const getAds = (req, res) => {
  pool.query('select * from ads', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getAdById = (req, res) => {
  const adId = req.params.id;

  pool.query('select * from ads where id = $1', [adId], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getAds,
  getAdById,
};
