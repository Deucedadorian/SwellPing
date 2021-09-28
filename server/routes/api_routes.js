function routeCreate(app) {
  
  app.post('/api/report', (req, res) => {
    // console.log(req.body);
    res.send('Completedd!');
  });
}

module.exports = routeCreate;