import React from 'react'
// import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className=''>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/About'>About</a>
        </li>
        <li>
          <a href='/Specials'>Menu</a>
        </li>
        <li>
          <a href='/ReserveTable'>Reservations</a>
        </li>
        <li>
          <a href='/Specials'>Order Online</a>
        </li>
        <li>
          <a href='/'>Login</a>
        </li>
  </nav>
  )
}

export default Nav