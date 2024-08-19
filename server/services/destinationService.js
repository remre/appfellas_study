const axios = require('axios');
const Destination = require('../models/Destinations');
// Logs the result and returns the destination object
const fetchDestinationByIATA = async iataCode => {
  const apiUrl = `https://api.schiphol.nl/public-flights/destinations/${iataCode}`;
  const appId = process.env.SCHIPHOL_APP_ID;
  const apiKey = process.env.SCHIPHOL_API_KEY;

  try {
    console.log(`Fetching data for IATA code: ${iataCode}`);
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: 'application/json',
        app_id: appId,
        app_key: apiKey,
        ResourceVersion: 'v4',
      },
    });

    console.log('API response received:', response.data);

    const destination = response.data;

    // Save or update the destination in your MongoDB database
    await Destination.findOneAndUpdate(
      { iata: destination.iata },
      {
        city: destination.city,
        country: destination.country,
        publicName: destination.publicName,
      },
      { upsert: true }
    );

    console.log(`Destination saved/updated for IATA code: ${iataCode}`);
    return destination;
  } catch (error) {
    console.error(
      `Error fetching destination for IATA code ${iataCode}: ${error.message}`
    );
    throw new Error(`Error fetching destination: ${error.message}`);
  }
};

module.exports = { fetchDestinationByIATA };
