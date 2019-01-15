const build = (req) => {
  const paramArray = [
    req.query.adid,
    req.query.rooms,
    req.query.regionid,
    req.query.localityid,
  ];
  const queryArray = [
    'id = ',
    'rooms = ',
    'regionid = ',
    'localityid = ',
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

  return query;
};

module.exports = {
  build,
};
