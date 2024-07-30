import React, { useState } from 'react'

const TestimonItem = ({props}) => {
    return (
        <div className='testimonItem'>
            <h4>Rating: {props.rating}</h4>
            <div className='itemInsideContainer'>
                <img src={props.image} alt='avatar'/>
                <p>{props.name}</p>
            </div>
            <p>{props.review}</p>
        </div>
    )
}

const Testimonials = () => {

    const [testimon, setTestimon] = useState([
        {name:'Bob', rating:'5.0', review:'Everything was great!', image:'/stock_avatar2.jpg'},
        {name:'Alice', rating:'4.7', review:'The food is delcious.', image:'/stock_avatar1.jpg'},
        {name:'Mary', rating:'4.8', review:'Recommend to everyone!', image:'/stock_avatar4.jpg'},
        {name:'Stewen', rating:'5.0', review:'Amazing service', image:'/stock_avatar3.jpg'}
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