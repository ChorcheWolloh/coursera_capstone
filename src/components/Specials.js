import React from 'react'

function Card() {
    return (
            <div className='productItem'>
                <img src='/placeholder.png' alt=''/>
                <div className='cardTopRow'>
                    <h4>Title</h4>
                    <h4>$Price</h4>
                </div>
                <p>
                    Description of an item including ingredients and some tasty descriptions to get the juices flowing
                </p>
                <div className='cardFooter'>
                    <span>Order a Delivery</span>
                    <img src='\delivery.svg' alt='moped icon'/>
                </div>
            </div>
)
  }

const Specials = () => {
  return (
    <article id='specials'>
        <div id='SpecialsTopRow'>
            <h2>Specials</h2>
            <button>Online Menu</button>
        </div>
        <div className='cardContainer'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </article>
  )
}

export default Specials