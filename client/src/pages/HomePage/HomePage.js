import React, { useState } from 'react';
import FlightFilter from '../../components/FlightFilter/FlightFilter';
import FlightList from '../../components/FlightList';
import Sidebar from '../../components/SideBar';
import ServiceBar from '../../components/ServiceBar/ServiceBar';
import Header from '../../components/Header/Header';
import { fetchFlights, handleFetchError } from '../../services/api';
import { filterByAirline, filterByStopInfo } from '../../services/filters';
import './HomePage.css';

function HomePage() {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleFilter = async filterParams => {
    try {
      const data = await fetchFlights(filterParams);
      setFlights(data);
      setFilteredFlights(data);
    } catch (error) {
      handleFetchError(error);
    }
  };

  const handleAirlineFilter = airline => {
    const filtered = filterByAirline(flights, airline);
    setFilteredFlights(filtered);
  };

  const handleStopInfoFilter = stopInfo => {
    const filtered = filterByStopInfo(flights, stopInfo);
    setFilteredFlights(filtered);
  };

  return (
    <div className="Home">
      <Header />
      <div className="main-content">
        <div className="left-side">
          <FlightFilter onFilter={handleFilter} />
          <div className="lower-content">
            <FlightList flights={filteredFlights} />
            <Sidebar
              flights={flights}
              onAirlineFilter={handleAirlineFilter}
              onStopInfoFilter={handleStopInfoFilter}
            />
          </div>
        </div>
        <ServiceBar />
      </div>
    </div>
  );
}

export default HomePage;
