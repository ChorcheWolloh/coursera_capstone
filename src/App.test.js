import { render, screen } from '@testing-library/react';
import { initializeTimes, timesReducer} from './components/BookingPage';
import BookingForm from './components/BookingForm';
import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { fetchAPI } from './components/coursera_api.js';

test('Renders the BookingForm heading', () => {
    render(
    <BrowserRouter>
      <BookingForm/>
    </BrowserRouter>
  );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

jest.mock('./components/coursera_api', () => ({
  fetchAPI: jest.fn(),
}));

test('initializeTimes returns correct initial times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  fetchAPI.mockReturnValue(expectedTimes);

  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});

test('updateTimes returns the same value that is provided by fetchAPI', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const newTimes = ['18:00', '19:00', '20:00'];
  fetchAPI.mockReturnValue(newTimes);

  const action = { type: 'UPDATE_TIMES', payload: '2024-08-29' };
  const newState = timesReducer(initialState, action);
  expect(newState).toEqual(newTimes);
});
