import axios from 'axios';

// Base URL for the API, can be configured via environment variables
const API_BASE_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Function to get flights based on schedule date, direction, and destination
export const getFlights = async (scheduleDate, direction, destination) => {
  const response = await axios.get(`${API_BASE_URL}/flights/filter`, {
    params: {
      scheduleDate,
      direction,
      destination,
    },
  });
  return response.data;
};

// Wrapper function to fetch flights, can be extended for additional logic
export const fetchFlights = async ({
  scheduleDate,
  direction,
  destination,
}) => {
  return await getFlights(scheduleDate, direction, destination);
};

// Error handling function for fetching flights
export const handleFetchError = error => {
  alert('An error occurred while fetching flights. Please try again.');
  console.error('Error fetching flights:', error.message);
};

// Function to fetch city and airport details based on IATA code
export const fetchCityAndAirport = async iata => {
  try {
    const response = await axios.get(`${API_BASE_URL}/destinations/${iata}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching city/airport for ${iata}:`, error.message);
    // Fallback to IATA code if API fails
    return { city: iata, airport: iata };
  }
};

// Function to fetch airline name based on airline code
export const fetchAirlineName = async airlineCode => {
  try {
    const response = await axios.get(`${API_BASE_URL}/airlines/${airlineCode}`);
    return response.data.publicName || airlineCode;
  } catch (error) {
    console.error(
      `Error fetching airline name for ${airlineCode}:`,
      error.message
    );
    // Fallback to airline code if API fails
    return airlineCode;
  }
};

// Function to book a flight with the provided reservation data
export const bookFlight = async reservationData => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/reservations`,
      reservationData
    );
    return response.data;
  } catch (error) {
    console.error('Error saving reservation:', error.message);
    throw error; // Re-throw error to be handled by the caller
  }
};
