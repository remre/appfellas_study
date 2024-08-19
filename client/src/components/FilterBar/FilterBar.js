import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onFilter }) => {
  const [stopInfo, setStopInfo] = useState('');
  const [airline, setAirline] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');
  // Function to handle the filter action
  const handleFilter = () => {
    // Call the onFilter prop with the current filter state
    onFilter({
      stopInfo,
      airline,
      departureDate,
      sortByPrice,
    });
  };

  return (
    <div className="filter-bar">
      <div className="filter-item">
        <h3>Stop Info</h3>
        <select value={stopInfo} onChange={e => setStopInfo(e.target.value)}>
          <option value="">All</option>
          <option value="Nonstop">Nonstop</option>
          <option value="Stopover">Stopover</option>
        </select>
      </div>
      <div className="filter-item">
        <h3>Airline</h3>
        <input
          type="text"
          value={airline}
          onChange={e => setAirline(e.target.value)}
          placeholder="Enter airline name"
        />
      </div>
      <div className="filter-item">
        <h3>Departure Date</h3>
        <input
          type="date"
          value={departureDate}
          onChange={e => setDepartureDate(e.target.value)}
        />
      </div>
      <div className="filter-item">
        <h3>Sort by Price</h3>
        <select
          value={sortByPrice}
          onChange={e => setSortByPrice(e.target.value)}
        >
          <option value="">None</option>
          <option value="lowest">Lowest to Highest</option>
          <option value="highest">Highest to Lowest</option>
        </select>
      </div>
      <button className="filter-button" onClick={handleFilter}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBar;
