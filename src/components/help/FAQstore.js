import React from 'react'
import './HelpofStoreStyle.scss'
import imgbannerservices from '../../assets/images/ServicesImages/banner-main.jpg';

function FAQstore() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='faqstore'>
    <div className='faqstore-banner'>
        <div className='faqstore-banner-title'>
            <h1>FQA </h1>
            <h1>DURABLE FURNITURES </h1>
            <p>Creative collaborations merge points of view with shared values for unique designs and experiences.We always want our services to fully meet the wishes of our customers</p>
        </div>
        <div className='faqstore-banner-img'>
            <img src={imgbannerservices} alt="bannersevices" />
        </div>
    </div>
    <div className='faqstore-wrapper'>
        <div className='faqstore-wrapper-item'>
            <h2>How to check stock availability</h2>
            <ul>
                <li>Always check your desired product's availability here on our website or in the Durable Furnitures before you visit your local Durable Furnitures store. We update stock status for our products every few hours.&nbsp;</li>
                <li>The best way to get the latest stock status is to visit the product page or listing pages of the item you are interested in and check its availability at your local Durable Furnitures store. When checking on our listing page, an indicator for your local store will display as well as possibility for delivery.&nbsp;&nbsp;&nbsp;</li>
                <li>If the product you are looking for is out of stock at your local store, you can click on the 'check other Durable Furnitures stores' link to view inventory from our other locations.</li>
                <li>You can also select 'notify me' and you will receive a communication from Durable Furnitures when your product is back in stock. Note that stock shipments are limited and tend to be purchased quickly, so we encourage you to use our click and collect service to secure the products you want or visit your local store first thing in the morning. &nbsp;</li>
                <li>Products that show the status 'Few in stock' may not be available for purchase online because their limited stock level means we can't guarantee that they will still be available at time of purchase.</li>
                <li>Please note - the stock status you see online or in the Durable Furnitures app is the same information that our customer service co-workers have access to. If you need further support, please see the FAQ below or connect with us via Chat.</li>
                <li>Before you visit be sure to download our shopping app - it is a great way to check out what Durable Furnitures has to offer and also to even check for stock while you are shopping in store!</li>
                </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>Order</h2>
            <ul>
                <li>How can I check the status of my order?<br></br>
                    Using your order number and email address or phone number, you can track your order online
                </li>
                
              
            </ul>
        </div>
        <div className='faqstore-wrapper-item'>
            <h2>Order Changes</h2>
            <ul>
                <li>
                We're unable to change the service on an order once payment has been collected. If you prefer to place a Click & Collect order or purchase in-store, it would be necessary to cancel your order for delivery.
                </li>
                
              
            </ul>
        </div>
    </div>
    
</div>
  )
}

export default FAQstore
