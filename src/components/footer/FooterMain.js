import './FooterMain.scss'
import React from 'react'
import logo from '../../assets/images/Logo-DurableFunitures-main.png'
import facebook from '../../stories/icons/facebook.png'
import twitter from '../../stories/icons/twitter.png'
import instagram from '../../stories/icons/instagram.png'
import pinterest from '../../stories/icons/pinterest.png'

import { Link } from 'react-router-dom'
function FooterMain() {
  const footercontent = {
    About : [
      {id : '1', info : 'About Us', path :'/about-us'},
      {id : '2', info : 'Stores', path:'/stores'},
      {id : '3', info : 'Ecosystem Of Durable', path:'/ecosystem'},
      {id : '4', info : 'Careers', path:'/careers'},
      
     
    ],
    Services : [
      {id : '1', info : 'Delivery Service', path :"/DeliveryServices"},
      {id : '2', info : 'Interior Design Service', path :"/InteriorDesignServices"},
      {id : '3', info : 'Online Planning Services', path :"/OnlinePlanningServices"},
      {id : '4', info : 'In-store Planning Services', path :"/In-storePlanningServices"},
      {id : '5', info : 'Technology Support', path :"/TechnologySupport"},
      
    ],
    Help :[
      {id : '1', info :'FAQ', path : 'faq'},
      {id : '2', info :'Warranties', path : 'warranties'},
      {id : '3', info :'Feedback', path : 'contact'},
      {id : '4', info :'Policy', path : 'policy'},
      {id : '5', info :'Product Recalls', path : 'product-recalls'},
    ],
    Social : [
      {id : '1', info :'Facebook', path :'https://www.facebook.com/', icon : facebook },
      {id : '2', info :'Twitter' , path :'https://twitter.com/', icon : twitter},
      {id : '3', info :'Instagram', path: 'https://www.instagram.com/', icon: instagram},
      {id : '4', info :'Pinterest', path: 'https://www.pinterest.com/', icon: pinterest}
    ]
  }
  return (
    <div className='footer'>
      <div className="footer-title">
        <img src={logo} alt="logo" className='footer-title-logo' />
      </div>
      <div className="footer-content">
        <div className="footer-content-left">
          <ul className="footer-content-left">
          <h4>ABOUT</h4>
          {footercontent.About.map((items,index) => {
            return (
              <li className="footer-content-left" key={index}>
                <Link to={items.path} className="footer-content-left-url">{items.info}</Link>
              </li>
            )
          })}
          </ul>
        </div>
        <div className="footer-content-center">
        <ul className="footer-content-center">
          <h4>SERVICES</h4>
          {footercontent.Services.map((items,index) => {
            return (
              <li className="footer-content-center" key={index}>
                <Link to={items.path} className="footer-content-center-url">{items.info}</Link>
              </li>
            )
          })}
          </ul>
        </div>
        <div className="footer-content-right">
          <ul className="footer-content-right">
            <h4>HELP</h4>
            {footercontent.Help.map((items,index) => {
              return (
                <li className="footer-content-right" key={index}>
                  <Link to={items.path} className="footer-content-right-url">{items.info}</Link>
                </li>
              )
            })}
          </ul>
              
        </div>
        <div className="footer-content-contact">
            <p>
                <i className="fa-solid fa-location-dot"></i>
                <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                590 D. Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City
            </p>
            <p>
                <i className="fa-solid fa-phone"></i>
                <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
                097 729 8513
            </p>
            <p>
                <i className="fa-solid fa-at"></i>
                <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
                durableFurnitures@email.com.vn
            </p>
        </div>
      </div>
      <div className="footer-social">
        <ul className="footer-social">
          <h4 className="footer-social-title">Contact With US</h4>
          {footercontent.Social.map((items,index) => {
            return (
              <li className="footer-social-contact" key={index}>
                <Link to={items.path} className="footer-social-contact-url">
                <img src={items.icon} alt={items.info} className="footer-social-contact-img" />
                {items.info}
                </Link>
              </li>
            )
          })}
          </ul>
      </div>
      <div className="footer-copyright">
        <p className='footer-copyright'>&copy; Copyright by Group 1 T1.2306 M0 Aptech, Ali Nguyen </p>
      </div>
    </div>
  )
}

export default FooterMain
