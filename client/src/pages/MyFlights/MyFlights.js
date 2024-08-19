import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyFlights.css';
import FilterBar from '../../components/FilterBar/FilterBar';

const MyFlights = () => {
  const [reservations, setReservations] = useState([]);
  const [filteredReservations, setFilteredReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/reservations'
        );
        setReservations(response.data);
        setFilteredReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error.message);
      }
    };

    fetchReservations();
  }, []);

  const handleFilter = filters => {
    let filtered = reservations;

    if (filters.airline) {
      filtered = filtered.filter(reservation =>
        reservation.airline
          .toLowerCase()
          .includes(filters.airline.toLowerCase())
      );
    }

    if (filters.stopInfo) {
      filtered = filtered.filter(
        reservation => reservation.stopInfo === filters.stopInfo
      );
    }

    if (filters.departureDate) {
      filtered = filtered.filter(reservation =>
        reservation.departureTime.startsWith(filters.departureDate)
      );
    }

    if (filters.sortByPrice === 'lowest') {
      filtered = filtered.sort(
        (a, b) =>
          parseFloat(a.price.replace('$', '')) -
          parseFloat(b.price.replace('$', ''))
      );
    } else if (filters.sortByPrice === 'highest') {
      filtered = filtered.sort(
        (a, b) =>
          parseFloat(b.price.replace('$', '')) -
          parseFloat(a.price.replace('$', ''))
      );
    }

    setFilteredReservations(filtered);
  };

  return (
    <div className="my-flights-container">
      <h2>My Flights</h2>
      <FilterBar onFilter={handleFilter} /> {/* Add the FilterBar component */}
      <div className="my-flight-list">
        {filteredReservations.map(reservation => (
          <div className="my-flight-card" key={reservation._id}>
            <div className="my-flight-info">
              <div className="my-flight-time">
                <h2>
                  {reservation.departureTime} — {reservation.arrivalTime}
                </h2>
                <strong>Date:</strong> {reservation.departureDate}
              </div>
              <div className="my-flight-middle">
                <div className="my-flight-details">
                  <div className="my-airline-name">
                    <p>{reservation.airline}</p>
                    <a href="/" className="my-flight-details-link">
                      Flight Details
                    </a>
                  </div>
                </div>
                <div className="my-flight-summary">
                  <p>{reservation.stopInfo}</p>
                  <p>{reservation.duration}</p>
                </div>
              </div>
            </div>
            <div className="my-flight-route">
              <p>
                {reservation.departureAirport} to {reservation.arrivalAirport}
              </p>
              <p>{reservation.flightName}</p>
            </div>
            <div className="my-flight-prices">
              <div className="my-price-category">
                <h3>{reservation.price}</h3> {/* Generated Price */}
              </div>
              <div className="my-price-category">
                <p>Main</p>
                <h3>{reservation.priceMain}</h3>
              </div>
              <div className="my-price-category">
                <p>Comfort+</p>
                <h3>{reservation.priceComfort}</h3>
              </div>
              <div className="my-price-category">
                <p>Delta One</p>
                <h3>{reservation.priceDeltaOne}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFlights;
