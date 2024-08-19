import React from 'react';

const FlightHeader = ({
  departureCity,
  departureAirport,
  arrivalCity,
  arrivalAirport,
}) => (
  <div className="flight-header">
    <h3>
      {departureCity} ({departureAirport}) - {arrivalCity} ({arrivalAirport})
    </h3>
  </div>
);

export default FlightHeader;
