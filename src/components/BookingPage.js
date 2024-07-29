import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

// Reducer function to manage availableTimes state
export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
      return state; 
    default:
      return state;
  }
};

export const initializeTimes = () => [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <article id="booking">
      <BookingForm 
        availableTimes={availableTimes} 
        onDateChange={handleDateChange} 
      />
    </article>
  );
};

export default BookingPage;