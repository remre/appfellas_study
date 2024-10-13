import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import FlightCard from './FlightCard';

const mockFlight = {
  scheduleDateTime: '2023-10-10T10:00:00Z',
  estimatedLandingTime: '2023-10-10T16:30:00Z',
  departureAirport: 'JFK',
  arrivalAirport: 'LAX',
  airlineCode: 'DL',
  price: 300,
};

test('renders FlightCard component', () => {
  render(<FlightCard flight={mockFlight} />);
  expect(screen.getByText(/JFK/i)).toBeInTheDocument();
  expect(screen.getByText(/LAX/i)).toBeInTheDocument();
  expect(screen.getByText(/\$300/i)).toBeInTheDocument();
});

test('handles flight booking', () => {
  window.alert = jest.fn();
  render(<FlightCard flight={mockFlight} />);
  fireEvent.click(screen.getByText(/Book Flight/i));
  expect(window.alert).toHaveBeenCalledWith('Flight booked successfully!');
});
