const ReportDataContainer = () => {
  
  const windyAPI = (location) => {

    // API URL
    const url = 'https://api.windy.com/api/point-forecast/v2';

    // placeholder values
    location = { "lat": 41.923, "lon": -69.974, }

    // console.log({...location });

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // ...location,
          lat: location.lat,
          lon: location.lon,
          model: "gfsWave",
          parameters: ["waves", "windWaves", "swell1", "swell2"],
          key: "FqbKekr3KyB7MZuMTaTbYV30dDDAYmLz",
        }),

        // console.log(body)
      })
        .then((res) => {
          // console.log(res.json());
          return res.json();
        })
        .then((swellData) => {
          console.log(swellData);

          fetch('/api/report', {
            method: "POST",
            body: JSON.stringify({ swellData }),
            headers: {
              "Content-Type": "application/json",
            },
          })
        });
  }

  return (
    <button onClick={windyAPI}>Call weather Gods</button>
  )

}


export default ReportDataContainer;