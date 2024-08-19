export const handleFilterSubmit = (
  e,
  tripType,
  departureDate,
  returnDate,
  departure,
  arrival,
  onFilter
) => {
  e.preventDefault();

  // Call the onFilter function with the form data
  onFilter({
    scheduleDate: departureDate,
    direction: 'A',
    route: departure,
    returnDate: tripType === 'round' ? returnDate : null,
    flightState: arrival,
  });
};
