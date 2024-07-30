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

test('Date input field has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={[]} onDateChange={() => {}} onSubmit={() => {}} />
    </BrowserRouter>
  );
  const dateInput = screen.getByLabelText('Choose date');
  const today = new Date().toISOString().split('T')[0];
  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toHaveAttribute('id', 'res-date');
  expect(dateInput).toHaveAttribute('min', today);
  expect(dateInput).toBeRequired();
});

test('Time select field has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={['17:00', '18:00']} onDateChange={() => {}} onSubmit={() => {}} />
    </BrowserRouter>
);
  const timeSelect = screen.getByLabelText('Choose time');
  expect(timeSelect).toHaveAttribute('id', 'res-time');
  expect(timeSelect).toBeRequired();
  expect(timeSelect).toHaveDisplayValue('Select a time');
});

test('Guests input field has the correct attributes', () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={[]} onDateChange={() => {}} onSubmit={() => {}} />
    </BrowserRouter>
);
  const guestsInput = screen.getByLabelText('Number of guests');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('placeholder', '1');
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('id', 'guests');
  expect(guestsInput).toBeRequired();
});

test('Occasion select field has the correct attributes', () => {
  render(
  <BrowserRouter>
    <BookingForm availableTimes={[]} onDateChange={() => {}} onSubmit={() => {}} />
  </BrowserRouter>
);
  const occasionSelect = screen.getByLabelText('Occasion');
  expect(occasionSelect).toHaveAttribute('id', 'occasion');
  expect(occasionSelect).toHaveDisplayValue('Select an occasion');
});

test('Submit button has the correct attributes', () => {
  render(
  <BrowserRouter>
    <BookingForm availableTimes={[]} onDateChange={() => {}} onSubmit={() => {}} />
  </BrowserRouter>
  );
  const submitButton = screen.getByRole('button', { name: 'Make Your reservation' });
  expect(submitButton).toHaveAttribute('type', 'submit');
  expect(submitButton).toHaveAttribute('value', 'Make Your reservation');
});