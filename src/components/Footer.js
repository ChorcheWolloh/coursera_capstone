import React from 'react'
import Nav from './Nav'

const Footer = () => {
  return (
    <footer>
        <img src='/placeholder.png' alt=''/>
        <div>
            <h4>Doormant Navigation</h4>
            <Nav/>
        </div>
        <nav>
            <h4>Contact</h4>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
        </nav>
        <nav>
            <h4>Social Media Links</h4>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
        </nav>
  </footer>
  )
}

export default Footer