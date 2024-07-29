import React from 'react'
import HeroSection from './HeroSection.js';
import Specials from './Specials.js';
import Testimonials  from './Testimonials.js';
import About from './About.js';

function Home() {
  return (
    <main>
        <HeroSection/>
        <Specials/>
        <Testimonials/>
        <About />
    </main>
  )
}

export default Home