import React, { useReducer, useCallback } from 'react';
import BookingForm from './BookingForm';
import {fetchAPI, submitAPI } from './coursera_api.js';
import { useNavigate } from 'react-router-dom';

export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

export const initializeTimes = () => fetchAPI(new Date()); 

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: new Date(date) });
  };

  const handleSubmit = (formData) => {
    const isConfirmed = submitAPI(formData);

    if (isConfirmed) {
      navigate('/confirmed-booking');
    }
    return isConfirmed; 
  };

  return (
    <article id="booking">
      <BookingForm 
        availableTimes={availableTimes} 
        onDateChange={handleDateChange} 
        onSubmit={handleSubmit} 
      />
    </article>
  );
};

export default BookingPage;
