import React from 'react'
import './Services.scss'
import { useEffect } from 'react'
function OnlinePlanningServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
  return (
  <div className='services'>
    <img src='https://nhaxinh.com/wp-content/uploads/2023/05/nha-xinh-thiet-ke-noi-that-ecopark-16523.jpg' alt=''></img>
    <h1>ONLINE PLANNING SERVICES</h1>
    <b>STEP 1: RECEIVE CUSTOMER NEEDS</b>
    <ul>
      <li>Customers come to company offices or call or send emails to Durable</li>
      <li>Customers can provide us with some basic information needs such as:</li>
      <li>Needs: Construction, design, complete interior design of apartments, townhouses, villas, shop-showroom, spa, pharmacy......</li>
      <li>Dimensions of the premises: length x width</li>
      <li>Desired model and style (Color, logo.....)</li>
      <li>Financial sources for investment norms</li>
      <li>Expected date for opening and completion</li>
      <li>Schedule a site survey for a free consultation</li>
    </ul>
    <b>STEP 2: SURVEY AND SIGN DESIGN CONTRACT</b>
    <ul>
      <li>Architects and Sales will come directly to the site to survey, advise and support investors on design and investment cost estimates.</li>
      <li>Directly receive customer opinions to understand usage needs, expected investment costs, target customers,... to have the most optimal design.</li>
      <li>Measure detailed site dimensions, evaluate the current status of the project, advise on design models and construction design options.</li>
    </ul>
    <b>STEP 3: DRAWING UP</b>
    <ul>
      <li>Detailed 3D & 2D perspective design.</li>
      <li>Correct drawings for customers.</li>
      <li>Complete drawings to meet customer design requirements</li>
      <li>Upload technical specifications and detailed project dimensions.</li>
      <li>Preliminary quote for the project.</li>
    </ul>
    <b>STEP 4: SIGN INTERIOR CONSTRUCTION CONTRACT</b>
    <ul>
      <li>Customers review 3D perspectives and 2D technical details.</li>
      <li>Explanation of construction plan.</li>
      <li>Signing an interior construction contract.</li>
    </ul>
    
  </div>
  )
}

export default OnlinePlanningServices
