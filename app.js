const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create a express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Avanthika collections application is running');
});

module.exports = app;