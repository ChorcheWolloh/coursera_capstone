import React, { useState } from 'react'

const TestimonItem = ({props}) => {
    return (
        <div className='testimonItem'>
            <h4>{props.rating}</h4>
            <div class='itemInsideContainer'>
                <img src={props.image} alt='avatar'/>
                <p>{props.name}</p>
            </div>
            <p>{props.review}</p>
        </div>
    )
}

const Testimonials = () => {

    const [testimon, setTestimon] = useState([
        {name:'Bob', rating:'5.0', review:'Everything was great!', image:'/placeholder.png'},
        {name:'Alice', rating:'4.7', review:'The food is delcious.', image:'/placeholder.png'},
        {name:'Mary', rating:'4.8', review:'Recommend to everyone!', image:'/placeholder.png'},
        {name:'Stewen', rating:'5.0', review:'Amazing service', image:'/placeholder.png'}
    ])

  return (
    <article id='testimonials'>
        <h2>Testimonials</h2>
        <div className='testimonContainer'>
            <TestimonItem props={testimon[0]} />
            <TestimonItem props={testimon[1]} />
            <TestimonItem props={testimon[2]} />
            <TestimonItem props={testimon[3]} />
        </div>
    </article>
  )
}

export default Testimonials