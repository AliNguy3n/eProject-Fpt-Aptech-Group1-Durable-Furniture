import './Home.scss'
import React from 'react'
import SlideShowHome from './SlideShowHome'
import BestSellers from './BestSellers'
import New from './New'
import Discover from './Discover'

function Home({handleAddComp,handleCarts}) {
  return (
    <div className='home'>
      <div className="home-preview">
        <SlideShowHome/>
      </div>
      
      <div className='home-content'>
        <BestSellers handleAddComp={handleAddComp} handleCarts={handleCarts}/>
        <New />
        <Discover/>

      </div>
    </div>
  )
}

export default Home
