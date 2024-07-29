import React from 'react'

const About = () => {
  return (
    <article id='aboutLittleLemon'>
      <div className='infoBlock'>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p> Autem et voluptates reiciendis recusandae. Voluptatum repellat libero corrupti omnis qui tempore.
            Autem et voluptates reiciendis recusandae. Voluptatum repellat libero corrupti omnis qui tempore.
            Autem et voluptates reiciendis recusandae. Voluptatum repellat libero corrupti omnis qui tempore.
            Autem et voluptates reiciendis recusandae. Voluptatum repellat libero corrupti omnis qui tempore.
        </p>
      </div>
        <div id='aboutUsImageContainer'>
            <img src='/Mario and Adrian A.jpg' id="firstImage" alt='first pic with authors'/>
            <img src='/Mario and Adrian B.jpg' id="secondImage" alt='second pic with authors'/>
        </div>
    </article>
  )
}

export default About