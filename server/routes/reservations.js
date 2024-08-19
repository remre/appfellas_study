const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router.post('/', async (req, res) => {
  const {
    flightId,
    userId,
    departureCity,
    arrivalCity,
    departureDate,
    departureTime,
    arrivalTime,
    duration,
    stopInfo,
    airline,
    flightName,
    price,
    departureAirport,
    arrivalAirport,
  } = req.body;

  try {
    if (
      !flightId ||
      !userId ||
      !departureCity ||
      !arrivalCity ||
      !departureDate ||
      !departureTime ||
      !arrivalTime ||
      !duration ||
      !stopInfo ||
      !airline ||
      !flightName ||
      !price ||
      !departureAirport ||
      !arrivalAirport
    ) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newReservation = new Reservation({
      flightId,
      userId,
      departureCity,
      arrivalCity,
      departureDate,
      departureTime,
      arrivalTime,
      duration,
      stopInfo,
      airline,
      flightName,
      price,
      departureAirport,
      arrivalAirport,
    });

    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/reservations - Retrieve all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
