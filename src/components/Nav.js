import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <nav className=''>
          <li>
            <Link to='/Home'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Home'>Menu</Link>
          </li>
          <li>
            <Link to='/BookingPage'>Reservations</Link>
          </li>
          <li>
            <Link to='/Home'>Order Online</Link>
          </li>
          <li>
            <Link to='/'>Login</Link>
          </li>
      </nav>

  )
}

export default Nav
