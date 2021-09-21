const express = require('express');
const path = require('path');
const routes = require('./routes/api_routes');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

app.listen(PORT, () => {
    console.log.apply(`Server running on port ${PORT}`);
});