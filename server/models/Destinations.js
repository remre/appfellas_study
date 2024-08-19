const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  iata: { type: String, required: true, unique: true },
  city: String,
  country: String,
  publicName: {
    dutch: String,
    english: String,
  },
});

const Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;
