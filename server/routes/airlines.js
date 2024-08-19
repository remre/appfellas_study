const express = require('express');
const router = express.Router();
const { fetchAirlineByCode } = require('../services/airlineService');

router.get('/:code', async (req, res) => {
  const { code } = req.params;

  try {
    const airline = await fetchAirlineByCode(code);
    res.json(airline);
  } catch (error) {
    console.error(`Error fetching airline for code ${code}: ${error.message}`);
    res.status(500).json({ message: 'Error fetching airline' });
  }
});

module.exports = router;
