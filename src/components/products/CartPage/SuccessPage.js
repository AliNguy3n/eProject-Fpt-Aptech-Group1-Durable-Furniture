import React from 'react'
import './CartPage.scss'
import img2 from '../../../assets/images/CartPage/vecteezy_check-mark-icon_9591413_842.png'
function SuccessPage() {
  return (
    <div className='cartpage'>
      <div className="banner">
        <div>
        <h1>THANK YOU FOR YOUR PURCHASE </h1>
        <p>*We'll email you an order confirmation with detail tracking info</p>
        </div>
        <img src={img2} alt="" />
      </div>
      <div className="container">
        

      
      </div>
    </div>
  )
}

export default SuccessPage
