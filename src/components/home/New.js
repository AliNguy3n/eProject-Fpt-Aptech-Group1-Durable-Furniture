import React from 'react'
import './New.scss'
import newData from './New.json'
import { Link } from 'react-router-dom';
function New() {
  const data =newData;
  return (
    <div className='new'>
      <h2 className='new-h2'>NEW</h2>
        <p className='new-p'>
          Discover a world of cool, contemporary pieces, new colours, new functionalities and exciting materials.<br></br> We have selected some of the most important and interesting news to show you below. Enjoy!
        </p>
        <h5 className='new-button'>
           <Link to="/products" >
                More... &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
            </Link>
        </h5>
        <div className='new-container' >
          {data.map((items, index)=>{
            return(
              <div className='new-container-items' style={{backgroundImage:`url("${items.img}")`}} key={index}>
                <div className='new-container-items-cover'>
                  <Link to={items.path} >
                    <h3 className='new-container-items-link'>{items.title}</h3>
                    <p className='new-container-items-link-p'>{items.content}</p>
                  </Link>
                </div>
              
              </div>
        )
      })}
        </div>
        

    </div>
  )
}

export default New
