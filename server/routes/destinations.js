const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:iata', async (req, res) => {
  const { iata } = req.params;
  try {
    const response = await axios.get(
      `https://api.schiphol.nl/public-flights/destinations/${iata}`,
      {
        headers: {
          Accept: 'application/json',
          app_id: process.env.SCHIPHOL_APP_ID,
          app_key: process.env.SCHIPHOL_API_KEY,
          ResourceVersion: 'v4',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching destination for ${iata}:`, error.message);
    res.status(500).json({ message: 'Error fetching destination' });
  }
});

module.exports = router;
