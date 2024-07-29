import { render, screen } from '@testing-library/react';
import { initializeTimes, timesReducer} from './components/BookingPage';
import BookingForm from './components/BookingForm';
import React from 'react';
import '@testing-library/jest-dom';

test('Renders the BookingForm heading', () => {
    render(<BookingForm/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('initializeTimes returns correct initial times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});

test('updateTimes returns the same value that is provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2024-29-08' };
  const newState = timesReducer(initialState, action);
  expect(newState).toEqual(initialState);
});