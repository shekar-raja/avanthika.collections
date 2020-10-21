// Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoDB = require('./app/config/mongoDB');
const router = require('./app/routes/app.routes');
// Create a express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

// Serving static files
app.use('/', express.static('public/dist/avanthika-collections'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/dist/avanthika-collections/index.html'), { req });
});
module.exports = app;