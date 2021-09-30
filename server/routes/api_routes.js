const axios = require('axios');

function routeCreate(app) {
  
  app.post('/api/report', (req, res) => {
    location = { ...req.body };
    console.log(location);
    axios({
      method: 'post',
      url: 'https://api.windy.com/api/point-forecast/v2',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
            // ...location,
            lat: location.lat,
            lon: location.lon,
            model: "gfsWave",
            parameters: ["waves", "windWaves", "swell1", "swell2"],
            key: "FqbKekr3KyB7MZuMTaTbYV30dDDAYmLz",
          }),
    })
    .then((swellData) => {
      console.log(swellData);
      res.send(swellData);
    });
  })
  
}

module.exports = routeCreate;