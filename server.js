const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/html/index.html'))
});

app.post('/api/report', (req, res) => {
    console.log(req.body);
    res.send('Completedd!');
});

app.listen(PORT, () => {
    console.log.apply(`Server running on port ${PORT}`);
});