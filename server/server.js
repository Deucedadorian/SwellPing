const express = require('express');
const path = require('path');
const routes = require('./routes/api_routes.js');

const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../client')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});