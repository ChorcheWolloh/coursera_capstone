import React from 'react';
import { useNavigate } from 'react-router-dom';


const HeroSection = () => {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/BookingPage');
  };

  return (
    <article id='heroSection'>
      <div className='infoBlock'>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic coctails in a lively but casual environment.
           The restaurant features a locally-sourced menu with daily specials</p>
        <button aria-label="Reserve a Table" onClick={handleButtonClick}>Reserve a Table</button>
      </div>
    <img src="\restauranfood.jpg" alt="picture displaying some restaurant food"/>
    </article>
  )
}

export default HeroSection