import express = require('express');
import path = require('path');
const app = express();
const port = process.env.sandwich_port || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/bundle.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'bundle.js'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
