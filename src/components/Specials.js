import React from 'react'

function Card() {
    return (
      <div id='CardContainer'>
                  <div className='item'>
                      <img src='' alt=''/>
                      <div className='cardTopRow'>
                          <h4>Title</h4>
                          <h4>Rating</h4>
                      </div>
                      <p>
                          Description of an item including ingredients and some tasty descriptions to get the juices flowing
                      </p>
                      <div className='cardFooter'>
                          <button>Order a Delivery</button>
                          <img src='' alt='moped icon'/>
                      </div>
                  </div>
              </div>
    )
  }

const Specials = () => {
  return (
    <article id='specials'>Specials
            <section>
                <div id='SpecialsTopRow'>
                    <h2>Specials</h2>
                    <button>Online Menu</button>
                </div>
            <div id='CardContainer'>
                <Card/>
                <Card/>
                <Card/>
            </div>
            </section>
        </article>
  )
}

export default Specials