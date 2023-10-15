import './Home.scss'
import React from 'react'
import SlideShowHome from './SlideShowHome'
import BestSellers from './BestSellers'
import New from './New'
import Discover from './Discover'

function Home({handleAddComp,handleCarts}) {
      const options = {
        enableHighAccuracy: true, 
        timeout: 5000, 
        maximumAge: 2000, 
    };
    navigator.geolocation.watchPosition(success, error, options);
    function success(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const accuracy = pos.coords.accuracy; // Accuracy in metres
      console.log('latitude',lat)
      console.log('longitude',lng)
      console.log('accuracy',accuracy)
    }
    function error(err) {
    if (err.code === 1) {
    console.log("Please allow geolocation access");
    } else {
    console.log("Cannot get current location");
    }
}
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
