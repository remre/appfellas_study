export const handleAirlineChange = (
  event,
  setSelectedAirline,
  onAirlineFilter
) => {
  const selectedAirline = event.target.value;
  setSelectedAirline(selectedAirline);
  onAirlineFilter(selectedAirline);
};

export const handleStopInfoChange = (
  event,
  setSelectedStopInfo,
  onStopInfoFilter
) => {
  const selectedStopInfo = event.target.value;
  setSelectedStopInfo(selectedStopInfo);
  onStopInfoFilter(selectedStopInfo);
};
