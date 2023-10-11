import React from 'react'
import './SevicesMain.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import imgbannerservices from '../../assets/images/ServicesImages/banner-main.jpg';
function ServicesMain() {
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
  return (
    <div className='servicesmain'>
        <div className='servicesmain-banner'>
            <div className='servicesmain-banner-title'>
                <h1>SERVICES OF </h1>
                <h1>DURABLE FURNITURES </h1>
                <p>Creative collaborations merge points of view with shared values for unique designs and experiences.We always want our services to fully meet the wishes of our customers</p>
            </div>
            <div className='servicesmain-banner-img'>
                <img src={imgbannerservices} alt="bannersevices" />
            </div>
        </div>
        <div className='servicesmain-wrapper'>
            <div className='servicesmain-wrapper-item'>
                <Link to='/InteriorDesignServices'>
                    <h3>
                        + INTERIOR DESIGN SERVICE
                    </h3>
                </Link>
                
            </div>
            <div className='servicesmain-wrapper-item'>
                <Link to='/In-storePlanningServices'>
                    <h3>
                        + IN-STORE PLANNING SERVICE
                    </h3>
                </Link>
            </div>
            <div className='servicesmain-wrapper-item'>
                <Link to='/DeliveryServices'>
                    <h3>
                        + Delivery Service
                    </h3>
                </Link>
            </div>
            <div className='servicesmain-wrapper-item'>
                <Link to='/OnlinePlanningServices'>
                    <h3>
                        + ONLINE PLANNING SERVICES
                    </h3>
                </Link>
            </div>
            <div className='servicesmain-wrapper-item'>
                <Link to='/TechnologySupport'>
                    <h3>
                        + TECHNOLOGY SUPPORT
                    </h3>
                </Link>   
            </div>
        </div>
    </div>
  )
}

export default ServicesMain
