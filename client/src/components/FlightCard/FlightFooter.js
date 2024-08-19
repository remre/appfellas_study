import React from 'react';

const FlightFooter = ({ price, handleBookFlight }) => (
  <div className="flight-footer">
    <div className="price-info">
      <p>
        <strong>Price:</strong> {price}
      </p>
      <p>One Way</p>
    </div>
    <button className="book-flight-button" onClick={handleBookFlight}>
      Book Flight
    </button>
  </div>
);

export default FlightFooter;
