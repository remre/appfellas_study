const axios = require('axios');
// Fetches filtered flights from the Schiphol API based on provided criteria
const getFlightsFiltered = async (
  date,
  direction,
  flightState,
  destination
) => {
  const apiUrl = 'https://api.schiphol.nl/public-flights/flights';
  const appId = process.env.SCHIPHOL_APP_ID;
  const apiKey = process.env.SCHIPHOL_API_KEY;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Accept: 'application/json',
        app_id: appId,
        app_key: apiKey,
        ResourceVersion: 'v4',
      },
      params: {
        scheduleDate: date,
        flightDirection: direction,
        publicFlightState: flightState,
        route: destination,
        includedelays: false,
        sort: '+scheduleTime',
      },
    });
    return response.data.flights;
  } catch (error) {
    console.error('Error fetching flights:', error.message);
    throw error;
  }
};

module.exports = { getFlightsFiltered };
