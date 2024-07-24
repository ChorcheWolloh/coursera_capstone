import React from 'react'

const TestimonItem = () => {
    return (
        <div className='testimonItem'>
            <h4>Rating</h4>
            <img src='' alt='avatar'/>
            <span>Name</span>
            <p>Review text</p>
        </div>
    )
}

const Testimonials = () => {
  return (
    <article>Testimonials
        <div id='testimonContainer'>
            <TestimonItem/>
            <TestimonItem/>
            <TestimonItem/>
            <TestimonItem/>
        </div>
    </article>
  )
}

export default Testimonials