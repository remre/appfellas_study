const axios = require('axios');
// Fetches airline details from the Schiphol API based on the provided airline code
const fetchAirlineByCode = async airlineCode => {
  const apiUrl = `https://api.schiphol.nl/public-flights/airlines/${airlineCode}`;
  const appId = process.env.SCHIPHOL_APP_ID;
  const apiKey = process.env.SCHIPHOL_API_KEY;

  try {
    console.log(`Fetching data for Airline code: ${airlineCode}`);
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: 'application/json',
        app_id: appId,
        app_key: apiKey,
        ResourceVersion: 'v4',
      },
    });

    console.log('API response received:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching airline for code ${airlineCode}: ${error.message}`
    );
    throw new Error(`Error fetching airline: ${error.message}`);
  }
};

module.exports = { fetchAirlineByCode };
