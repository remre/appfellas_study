const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  flightId: { type: String, required: true },
  userId: { type: String, required: true },
  reservedAt: { type: Date, default: Date.now },
  departureCity: { type: String, required: true },
  arrivalCity: { type: String, required: true },
  departureDate: { type: String, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  duration: { type: String, required: true },
  stopInfo: { type: String, required: true },
  airline: { type: String, required: true },
  flightName: { type: String, required: true },
  price: { type: String, required: true },
  departureAirport: { type: String, required: true },
  arrivalAirport: { type: String, required: true },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
