const axios = require('axios');
require('dotenv').config();

function routeCreate(app) {
  
  app.post('/api/report', (req, res) => {
    location = { ...req.body };
    axios({
      method: 'post',
      url: process.env.WINDY_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
            lat: location.lat,
            lon: location.lon,
            model: "gfsWave",
            parameters: ["waves", "windWaves", "swell1", "swell2"],
            key: process.env.WINDY_API_KEY,
          },
    })
    .then((swellData) => {
      console.log(swellData);
      res.send(swellData);
    });
  })
  
}

module.exports = routeCreate;