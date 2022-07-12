import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/restaurant.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'

const data = [
  {
    id: 1, image: IMG1, title: 'Cinema Ticket website', github: 'https://github.com/trolevan26299/cinematicket-Using_React_Redux',
    demo: 'http://cinematicket.vercel.app/'
  },
  {
    id: 2, image: IMG2, title: 'Restaurant Website ', github: 'https://github.com/trolevan26299/restaurantProject_Using_React_FireBase',
    demo: 'https://restaurant-project-gamma.vercel.app/'
  },
  {
    id: 3, image: IMG3, title: 'Game Bau Cua', github: 'https://github.com/trolevan26299/GameBauCua',
    demo: 'https://baucua247.vercel.app/'
  },
  {
    id: 4, image: IMG4, title: 'Game Oan Tu Xi', github: 'https://github.com/trolevan26299/React_Redux_GameOanTuXi',
    demo: 'https://gameoantixiredux.netlify.app/'
  },
  {
    id: 5, image: IMG5, title: 'UI/UX NFT Market', github: '#',
    demo: 'https://www.behance.net/gallery/145730571/NFTS-MARKETPLACE'
  },
  {
    id: 6, image: IMG6, title: 'UI/UX Food App', github: '#',
    demo: 'https://www.behance.net/gallery/145731415/App-Food-UiUx-Design'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img style={{width:'100%',height:'11rem'}} src={image} alt="img" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' disabled target='_blank'>Github</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio