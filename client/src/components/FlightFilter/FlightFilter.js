import React, { useState } from 'react';
import './FlightFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlane,
  faPlaneDeparture,
  faPlaneArrival,
} from '@fortawesome/free-solid-svg-icons';
import { handleFilterSubmit } from '../../utils/formUtils';
import InputField from './InputField';

const FlightFilter = ({ onFilter }) => {
  const [tripType, setTripType] = useState('round'); // Default to Round Trip
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  return (
    <form
      onSubmit={e =>
        handleFilterSubmit(
          e,
          tripType,
          departureDate,
          returnDate,
          departure,
          arrival,
          onFilter
        )
      }
      className="flight-filter"
    >
      <div className="header">
        <div className="header-left">
          <FontAwesomeIcon icon={faPlane} className="nav-icon" />
          <h2>Book Your Flight</h2>
        </div>
        <div className="trip-type-toggle">
          <button
            type="button"
            className={tripType === 'round' ? 'active left' : 'left'}
            onClick={() => setTripType('round')}
          >
            Round trip
          </button>
          <button
            type="button"
            className={tripType === 'one-way' ? 'active right' : 'right'}
            onClick={() => setTripType('one-way')}
          >
            One way
          </button>
        </div>
      </div>
      <div className="input-group">
        <InputField
          type="text"
          placeholder="Departure (IATA Code)"
          value={departure}
          onChange={e => setDeparture(e.target.value)}
          icon={faPlaneDeparture}
          required
        />
        <InputField
          type="text"
          placeholder="Arrival (IATA Code)"
          value={arrival}
          onChange={e => setArrival(e.target.value)}
          icon={faPlaneArrival}
        />
        <InputField
          type="date"
          value={departureDate}
          onChange={e => setDepartureDate(e.target.value)}
          required
        />
        {tripType === 'round' && (
          <InputField
            type="date"
            value={returnDate}
            onChange={e => setReturnDate(e.target.value)}
            required
          />
        )}
      </div>
      <button type="submit" className="search-btn">
        Show flights
      </button>
    </form>
  );
};

export default FlightFilter;
