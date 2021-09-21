module.exports = (location, body) => {

    // API URL
    const url = 'https://api.windy.com/api/point-forecast/v2';

    // placeholder values
    location = { "lat": 49.809, "lon": 16.787, }

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lat: 41.923,
          lon: -69.974,
          model: "gfsWave",
          parameters: ["waves", "windWaves", "swell1", "swell2"],
          key: "FqbKekr3KyB7MZuMTaTbYV30dDDAYmLz",
        }),
      })
        .then((res) => {
          // console.log(res.json());
          return res.json();
        })
        .then((swellData) => {
          console.log(swellData);

          fetch("/api/report", {
            method: "POST",
            body: JSON.stringify({ swellData }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        });
}