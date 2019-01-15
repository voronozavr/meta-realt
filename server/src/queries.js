const PoolConst = require('pg').Pool;
const queryBuilder = require('./queryBuilder');

const pool = new PoolConst({
  user: 'postgres',
  host: 'localhost',
  database: 'meta-realt',
  password: 'root',
  port: 5432,
});

const getAds = (req, res) => {
  const query = queryBuilder.build(req);
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getAds,
};
