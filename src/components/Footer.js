import React from 'react'
import Nav from './Nav'

const Footer = () => {
  return (
    <footer>
        <img src='little_lemon_monochromic_logo.png' alt='monochormic Little Lemon logo'/>
        <div>
            <h4>Doormant Navigation</h4>
            <Nav/>
        </div>
        <nav>
            <h4>Contact</h4>
            <li>Chicago Lincoln St 16</li>
            <li>(555) 555-5555</li>
            <li>LittleLemon@gmail.com</li>
        </nav>
        <nav>
            <h4>Social Media Links</h4>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagramm</li>
        </nav>
  </footer>
  )
}

export default Footer