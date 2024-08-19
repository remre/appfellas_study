import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faPlaneArrival,
} from '@fortawesome/free-solid-svg-icons';
const FlightInfo = ({
  departureTime,
  departureDate,
  departureAirport,
  durationFormatted,
  stopInfo,
  airlineName,
  arrivalTime,
  arrivalAirport,
}) => (
  <div className="flight-info">
    <div className="flight-section departure">
      <p>
        <FontAwesomeIcon icon={faPlaneDeparture} className="nav-icon" />
        <strong>Departure:</strong> {departureTime}
      </p>

      <p>Airport: {departureAirport}</p>
    </div>
    <div className="flight-section duration">
      <p>
        <strong>{durationFormatted}</strong> ({stopInfo})
      </p>
      <p>
        <strong>Airline:</strong> {airlineName}
      </p>
    </div>
    <div className="flight-section arrival">
      <p>
        <FontAwesomeIcon icon={faPlaneArrival} className="nav-icon" />
        <strong>Arrival:</strong> {arrivalTime}
      </p>
      <p>Airport: {arrivalAirport}</p>
    </div>
  </div>
);

export default FlightInfo;
