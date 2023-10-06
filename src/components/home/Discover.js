import React from 'react'
import { Link } from 'react-router-dom'
import './Discover.scss'
import video1 from '../../assets/videos/0927.mp4'
import video2 from '../../assets/videos/0928.mp4'

function Discover() {
  return (
    <div className="discover">
      <h3 className='discover-title-h3'>EXPLORE SPECIAL EDITIONS</h3>
        <p  className='discover-title-p'>Discover timeless VietNam design furniture at its finest and find the perfect piece for your home. <br></br>
        We’re putting the spotlight on a curated selection of our best-selling living, dining and home office designs.
        </p>

        <div className='discover1' >
          <video autoPlay loop muted className="discover1-video">
              <source src={video1} type='video/mp4' />
          </video>
          <div className="discover1-content">
            <h4 className="discover1-content-title-h4">Modern & Youthful Style</h4>
            <p className="discover1-content-paragraph">Stylish, modern and youthful - the collection is a   <br></br> combination of wood, leather, fabric with<br></br> the main highlight being gray  painted<br></br> metal to make the space more attractive<br></br> and personal, suitable for   modern life.<br></br>
            <Link>More...</Link>
            </p>
          </div>
        </div>

        <div className='discover2' >
          <div className="discover2-content">
            <h4 className="discover2-content-title-h4">Love Of Nature And The Charm Of Wood</h4>
            <p className="discover2-content-paragraph">The rustic and luxurious design is extremely unique. <br></br> Oak wood is used as the main component of the collection.<br></br> Bringing a warm   and elegant color scheme, this type of wood<br></br> contributes to making the living space   more cozy, <br></br>closer and more lively, creating cohesion for family members. <br />
            <Link>More...</Link>
            </p>
            
          </div>
          <video autoPlay loop muted className="discover2-video">
              <source src={video2} type='video/mp4' />
          </video>
        </div>



      </div>

  )
}

export default Discover
