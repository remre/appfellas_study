const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const flightsRoute = require('./routes/flights');
const reservationsRoute = require('./routes/reservations');
const airlinesRoute = require('./routes/airlines');
const destinationsRoute = require('./routes/destinations');

app.use('/api/flights', flightsRoute);
app.use('/api/reservations', reservationsRoute);
app.use('/api/airlines', airlinesRoute);
app.use('/api/destinations', destinationsRoute);

module.exports = app;
