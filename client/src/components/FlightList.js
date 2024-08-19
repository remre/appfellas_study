import React, { Suspense, lazy } from 'react';

const FlightCard = lazy(() => import('./FlightCard/FlightCard'));

const FlightList = ({ flights }) => {
  const displayedFlights = flights.slice(0, 2);

  return (
    <div className="flight-list">
      <h2>Available Flights</h2>
      <Suspense fallback={<div>Loading flights...</div>}>
        {displayedFlights.length > 0 ? (
          displayedFlights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))
        ) : (
          <p>No flights available for the selected criteria.</p>
        )}
      </Suspense>
    </div>
  );
};

export default FlightList;
