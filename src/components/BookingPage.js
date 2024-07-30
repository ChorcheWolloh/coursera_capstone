import React, { useReducer, useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './coursera_api.js';
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
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(savedBookings);
  }, []);

  const handleDateChange = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: new Date(date) });
  };

  const handleSubmit = (formData) => {
    const isConfirmed = submitAPI(formData);
  
    if (isConfirmed) {
      setBookings(prevBookings => {
        const updatedBookings = [...prevBookings, formData];
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
        return updatedBookings;
      });
      navigate('/confirmed-booking');
    }
    return isConfirmed;
  };
  

  return (
    <article id="booking">
      <table>
        <caption>Current Reservations:</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
              <td>{booking.occasion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BookingForm 
        availableTimes={availableTimes} 
        onDateChange={handleDateChange} 
        onSubmit={handleSubmit} 
      />
    </article>
  );
};

export default BookingPage;
