// Filters flights by airline code
export const filterByAirline = (flights, airline) => {
  if (!airline) return flights;
  return flights.filter(flight => flight.prefixIATA === airline);
};
// Filters flights by stop information
export const filterByStopInfo = (flights, stopInfo) => {
  if (!stopInfo) return flights;
  return flights.filter(
    flight =>
      flight.route.destinations.length === (stopInfo === 'Nonstop' ? 1 : 2)
  );
};
