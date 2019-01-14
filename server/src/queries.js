const PoolConst = require('pg').Pool;

const pool = new PoolConst({
  user: 'postgres',
  host: 'localhost',
  database: 'meta-realt',
  password: 'root',
  port: 5432,
});

const getAds = (req, res) => {
  const paramArray = [
    req.query.adid,
    req.query.rooms,
  ];
  const queryArray = [
    'id = ',
    'rooms = ',
  ];

  let query = 'select * from ads ';
  let isFirstParam = true;

  paramArray.forEach((param, index) => {
    if (param) {
      if (isFirstParam) {
        query += 'where ';
        isFirstParam = false;
      } else {
        query += 'and ';
      }
      query += `${queryArray[index]} ${param} `;
    }
  });

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
