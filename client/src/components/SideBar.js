import React, { useState } from 'react';
import {
  handleAirlineChange,
  handleStopInfoChange,
} from '../handlers/SideBarHandlers';

const Sidebar = ({ flights, onAirlineFilter, onStopInfoFilter }) => {
  const [selectedAirline, setSelectedAirline] = useState('');
  const [selectedStopInfo, setSelectedStopInfo] = useState('');

  const airlines = [...new Set(flights.map(flight => flight.prefixIATA))];

  return (
    <div className="sidebar">
      <h2>Filter by Airline</h2>
      <select
        value={selectedAirline}
        onChange={event =>
          handleAirlineChange(event, setSelectedAirline, onAirlineFilter)
        }
      >
        <option value="">All Airlines</option>
        {airlines.map(airline => (
          <option key={airline} value={airline}>
            {airline}
          </option>
        ))}
      </select>

      <h2>Filter by Stops</h2>
      <div>
        <input
          type="radio"
          id="nonstop"
          name="stopInfo"
          value="Nonstop"
          checked={selectedStopInfo === 'Nonstop'}
          onChange={event =>
            handleStopInfoChange(event, setSelectedStopInfo, onStopInfoFilter)
          }
        />
        <label htmlFor="nonstop">Nonstop</label>
      </div>
      <div>
        <input
          type="radio"
          id="stopover"
          name="stopInfo"
          value="Stopover"
          checked={selectedStopInfo === 'Stopover'}
          onChange={event =>
            handleStopInfoChange(event, setSelectedStopInfo, onStopInfoFilter)
          }
        />
        <label htmlFor="stopover">Stopover</label>
      </div>
    </div>
  );
};

export default Sidebar;
