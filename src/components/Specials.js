import React, { useState } from 'react'

function Card({props}) {
    return (
            <div className='productItem'>
                <img src='/placeholder.png' alt=''/>
                <div className='cardTopRow'>
                    <h4>{props.title}</h4>
                    <h4>${props.price}</h4>
                </div>
                <p>{props.description}</p>
                <div className='cardFooter'>
                    <span>Order a Delivery</span>
                    <img src='\delivery.svg' alt='moped icon'/>
                </div>
            </div>
)
  }

const Specials = () => {

    const [specials, setSpecials] = useState([
        {title: 'Greek salad', price: '12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'},
        {title: 'Bruchetta', price: '5.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'},
        {title: 'Lemon Dessert', price: '5.00', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'}
    ])

  return (
    <article id='specials'>
        <div id='SpecialsTopRow'>
            <h2>Specials</h2>
            <button>Online Menu</button>
        </div>
        <div className='cardContainer'>
            <Card props={specials[0]}/>
            <Card props={specials[1]}/>
            <Card props={specials[2]}/>
        </div>
    </article>
  )
}

export default Specials