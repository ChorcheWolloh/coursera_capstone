import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate(); 

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    onDateChange(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { date, time, guests, occasion };
    
    if (onSubmit) {
      const isConfirmed = onSubmit(formData);

      if (isConfirmed) {
        navigate('/confirmedBooking');
      }
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form id="reservationForm" onSubmit={handleSubmit}>
      <h4>Book Now</h4>
      <label htmlFor="res-date">Choose date</label>
      <input 
        required
        type="date" 
        id="res-date" 
        value={date} 
        min={today} 
        onChange={handleDateChange} 
      />
      
      <label htmlFor="res-time">Choose time</label>
      <select 
        required
        id="res-time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a time</option>
        {availableTimes && availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
      
      <label htmlFor="guests">Number of guests</label>
      <input 
        required
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(Number(e.target.value))}
      />
      
      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      
      <input 
        id="reservationSubmit"
        type="submit" 
        value="Make Your reservation" 
      />
    </form>
  );
};

export default BookingForm;
