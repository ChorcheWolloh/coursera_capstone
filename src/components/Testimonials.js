import React from 'react'

const TestimonItem = () => {
    return (
        <div className='testimonItem'>
            <h4>Rating</h4>
            <img src='/placeholder.png' alt='avatar'/>
            <span>Name</span>
            <p>Review text</p>
        </div>
    )
}

const Testimonials = () => {
  return (
    <article id='testimonials'>
        <h2>Testimonials</h2>
        <div className='testimonContainer'>
            <TestimonItem/>
            <TestimonItem/>
            <TestimonItem/>
            <TestimonItem/>
        </div>
    </article>
  )
}

export default Testimonials