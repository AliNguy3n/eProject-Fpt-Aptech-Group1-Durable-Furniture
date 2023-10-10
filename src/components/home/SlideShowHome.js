import React from 'react';
import { useState,useEffect } from 'react';
import './SlideShowHome.scss';
import slideData from './slideData.json' ;
import prev from '../../stories/icons/previous.png'
import next from '../../stories/icons/next.png'

function SlideShowHome() {
    const [slides ] = useState(slideData);
    const [slidecurrent, setSlidecurrent] = useState(0);
    let slideslength = slides.length;
    const handleNext = () =>{
        setSlidecurrent(slidecurrent === slideslength - 1 ? 0 : slidecurrent + 1)
    };
    const handlePrev = () =>{
        setSlidecurrent(slidecurrent === 0 ? slideslength -1 : slidecurrent -1)
    }
    useEffect(()=>{
      const interval = setInterval(()=> {
        setSlidecurrent(slidecurrent === slideslength - 1 ? 0 : slidecurrent + 1)
    },5000 );
      return () => clearInterval(interval);
    },[slidecurrent]);
  
  return (
    <div className='slides' >
          <div className="slideshow"  >
            {slides.map((items, index) =>{
              return(
              <img src={items.image} alt={items.title} className={index === slidecurrent ? "slideshow-img-active" : "slideshow-img-freezer"}  key={index}/>  
              )
            })}
              <div className="slideshow-preview"  >
                <div className="slideshow-preview-left"> 
                  <button className='slideshow-preview-button' onClick={handlePrev} style={{backgroundImage   : {prev}}} >
                    <img src={prev} alt="prev-button" className='slideshow-preview-button-previous'/>
                  </button>
                </div>
                <div className="slideshow-preview-center" >
                  {slides.map((items, index) =>{
                    return( index === slidecurrent &&
                      <div key={index}>
                        <h2 className="slideshow-preview-center-title">{items.title}</h2>
                        <p dangerouslySetInnerHTML={{__html: items.content}}    className="slideshow-preview-center-content"/>
                      </div>
                    )
                  })}
                 
                </div>
                <div className="slideshow-preview-right"> 
                  <button className='slideshow-preview-button' onClick={handleNext} >
                  <img src={next} alt="prev-button" className='slideshow-preview-button-next' />
                  </button>
                </div>
            </div>
      </div>

      <div className="slides-state">
          {slides.map((items,index) =>{
            return( 
              <div className={index === slidecurrent ? "slides-state-active": "slides-state-select"} onClick={() => setSlidecurrent(index)} key={index}></div>
            )
          })}
      </div>
    </div>
  )
}

export default SlideShowHome

