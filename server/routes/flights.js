const express = require('express');
const router = express.Router();
const { getFlightsFiltered } = require('../services/flightService');

router.get('/filter', async (req, res) => {
  const { scheduleDate, direction, destination } = req.query;

  try {
    const flights = await getFlightsFiltered(
      scheduleDate,
      direction,
      destination
    );
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
