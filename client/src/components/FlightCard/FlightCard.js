import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import {
  fetchCityAndAirport,
  fetchAirlineName,
  bookFlight,
} from '../../services/api';
import {
  formatDate,
  formatTime,
  calculateDuration,
} from '../../utils/dateTime';
import FlightHeader from './FlightHeader';
import FlightInfo from './FlightInfo';
import FlightFooter from './FlightFooter';
import './FlightCard.css';

const FlightCard = ({ flight }) => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [airlineName, setAirlineName] = useState('');

  const departureDate = formatDate(flight.scheduleDateTime);
  const departureTime = formatTime(flight.scheduleDateTime, 2);
  const arrivalTime = formatTime(flight.estimatedLandingTime);
  const durationFormatted = calculateDuration(
    flight.scheduleDateTime,
    flight.estimatedLandingTime
  );
  const price = `$${Math.floor(Math.random() * 900) + 100}`;
  // const isNonstop = flight.route.destinations.length === 1;
  // const stopInfo = isNonstop ? 'Nonstop' : '1 stop';

  useEffect(() => {
    // Fetch departure and arrival city and airport details
    const fetchDepartureAndArrival = async () => {
      if (flight.route.destinations[0]) {
        const departureData = await fetchCityAndAirport(
          flight.route.destinations[0]
        );
        setDepartureCity(departureData.city);
        setDepartureAirport(flight.route.destinations[0]);
      }
      if (flight.route.destinations.length > 1) {
        const arrivalData = await fetchCityAndAirport(
          flight.route.destinations[flight.route.destinations.length - 1]
        );
        setArrivalCity(arrivalData.city);
        setArrivalAirport(
          flight.route.destinations[flight.route.destinations.length - 1]
        );
      } else {
        setArrivalCity('Amsterdam');
        setArrivalAirport('AMS');
      }
    };

    fetchDepartureAndArrival();
  }, [flight.route.destinations]);

  useEffect(() => {
    // Fetch airline name based on flight prefixIATA
    const fetchAirline = async () => {
      if (flight.prefixIATA) {
        const airline = await fetchAirlineName(flight.prefixIATA);
        setAirlineName(airline);
      }
    };

    fetchAirline();
  }, [flight.prefixIATA]);

  const handleBookFlight = async () => {
    const flightDateTime = moment(flight.scheduleDateTime).utc();
    const currentDateTime = moment().utc();
    // Check if the flight has already departed
    if (flightDateTime.isBefore(currentDateTime)) {
      alert('This flight has already departed. You cannot book it.');
      return;
    }

    const reservationData = {
      flightId: flight.id,
      userId: 'user123',
      departureCity,
      arrivalCity,
      departureDate,
      departureTime,
      arrivalTime,
      duration: durationFormatted,
      // stopInfo,
      airline: airlineName,
      flightName: flight.flightName,
      price,
      departureAirport,
      arrivalAirport,
    };

    try {
      console.log('Attempting to book flight:', reservationData);
      await bookFlight(reservationData);
      alert('Flight booked successfully!');
    } catch (error) {
      alert('Error booking flight. Please try again.');
    }
  };

  return (
    <div className="flight-card">
      <FlightHeader
        departureCity={departureCity}
        departureAirport={departureAirport}
        arrivalCity={arrivalCity}
        arrivalAirport={arrivalAirport}
      />
      <FlightInfo
        departureTime={departureTime}
        departureDate={departureDate}
        departureAirport={departureAirport}
        durationFormatted={durationFormatted}
        // stopInfo={stopInfo}
        airlineName={airlineName}
        arrivalTime={arrivalTime}
        arrivalAirport={arrivalAirport}
      />
      <FlightFooter price={price} handleBookFlight={handleBookFlight} />
      <p className="flight-details-link">
        <a href="/">Check the details</a>
      </p>
    </div>
  );
};

export default FlightCard;
