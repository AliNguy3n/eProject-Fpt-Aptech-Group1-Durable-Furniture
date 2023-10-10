import './NavMain.scss'
import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import productList from '../products/Products/ProductMix.json';
import brands from '../products/Products/Brands.json'
import tableicon from "../../stories/icons/round-table.png";
import chairicon from "../../stories/icons/dining.png";
import sofaicon from "../../stories/icons/sofa.png";
import storageicon from "../../stories/icons/wardrobe.png";

function NavMain() {
  const menulist = productList;
  const BrandList = brands;
  let location = useLocation().pathname;
  return (
    <div className='nav'>
      <nav className='nav-main'>
        <ul className="nav-main-ul">
            <li className="nav-main-ul-li">
                <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')}  style={{color: location ==='/'?'': '#515151'}}>Home</NavLink>
            </li>
            <li className="nav-main-ul-li">
                <NavLink to="products" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{color: location ==='/'?'': '#515151'}}>Product List &nbsp;
                <i className="fa-solid fa-chevron-down icon-style"></i>
                </NavLink>
                <div className="nav-main-ul-li-dropdown" >
                  <ul className="nav-main-ul-li-dropdown-sub">
                    <li className="nav-main-ul-li-dropdown-sub-list">
                      <img src={tableicon} alt="table" className='iconitems' /> 
                      <span> Tables</span>
                      <ul className="nav-main-ul-li-dropdown-sub-list" >
                        {menulist.Tables.map((items,index) => {
                          return (
                            <li key = {items.id} className='nav-main-ul-li-dropdown-sub-items' >
                              <Link to={`products/${items.id}`}  className='nav-main-ul-li-dropdown-sub-items'> {items.Name}</Link>
                            </li>
                          )
                        } )}
                      </ul>
                    </li>
                    <li className="nav-main-ul-li-dropdown-sub-list">
                      <img src={chairicon} alt="table" className='iconitems' /> 
                      <span> Chairs</span>
                      <ul className="nav-main-ul-li-dropdown-sub-list" >
                        {menulist.Chairs.map((items,index) => {
                          return (
                            <li key = {items.id} className='nav-main-ul-li-dropdown-sub-items' >
                              <Link to={`products/${items.id}`}  className='nav-main-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                            </li>
                          )
                        } )}
                      </ul>
                    </li>
                    <li className="nav-main-ul-li-dropdown-sub-list">
                      <img src={sofaicon} alt="sofa" className='iconitems' /> 
                      <span> Sofas</span>
                      <ul className="nav-main-ul-li-dropdown-sub-list" >
                        {menulist.Sofas.map((items,index) => {
                          return (
                            <li key = {items.id} className='nav-main-ul-li-dropdown-sub-items' >
                              <Link to={`products/${items.id}`}  className='nav-main-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                            </li>
                          )
                        } )}
                      </ul>
                    </li>
                    <li className="nav-main-ul-li-dropdown-sub-list">
                      <img src={storageicon} alt="sofa" className='iconitems' /> 
                      <span> Storage</span>
                      <ul className="nav-main-ul-li-dropdown-sub-list" >
                        {menulist.Storage.map((items,index) => {
                          return (
                            <li key = {items.id} className='nav-main-ul-li-dropdown-sub-items' >
                              <Link to={`products/${items.id}`} className='nav-main-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                            </li>
                          )
                        } )}
                      </ul>
                    </li>
                      
                  </ul>

                </div>
                
            </li>
            <li className="nav-main-ul-li">
                <NavLink to="brands/1" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{color: location ==='/'?'': '#515151'}}>Brands &nbsp;
                  <i className="fa-solid fa-chevron-down icon-style"></i>
                </NavLink>
                <div className="nav-main-ul-li-dropdown"  >
                  <ul className="nav-main-ul-li-dropdown-sub"  style={{maxWidth:'fit-content'}}>
                  <li className="nav-main-ul-li-dropdown-sub-list" >
                      <ul className="nav-main-ul-li-dropdown-sub-list" >
                        {BrandList.map((items,index) => {
                          return (
                            <li key = {items.id} className='nav-main-ul-li-dropdown-sub-items' >
                              <Link to={`brands/${items.id}`} className='nav-main-ul-li-dropdown-sub-items' >  {items.Name}</Link>
                            </li>
                          )
                        } )}
                      </ul>
                    </li>

                  </ul>
                </div>
            </li>
            
            <li className="nav-main-ul-li">
                <NavLink to="services"className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{color: location ==='/'?'': '#515151'}}>Services</NavLink>
            </li>
            <li className="nav-main-ul-li">
                <NavLink to="/contact" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{color: location ==='/'?'': '#515151'}}>Contact</NavLink>
            </li>
            <li className="nav-main-ul-li">
                <NavLink to="/about-us" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{color: location ==='/'?'': '#515151'}}>About Us</NavLink>
            </li>
            <li className="nav-main-ul-li">
                <NavLink to="/compare" className={(navData) => (navData.isActive ? "active-style" : 'none')} style={{color: location ==='/'?'': '#515151'}}>Compare</NavLink>
            </li>
        </ul>
      {/* for mobie */}
        <div className="nav-main-mobile">
        <ul className="nav-main-mobile-ul">
              <li className="nav-main-mobile-ul-li">
                  <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" :  'none')}  style={{color: location ==='/'?'': '#515151'}}>Home</NavLink>
              </li>
              <li className="nav-main-mobile-ul-li">
                  <NavLink to="products" className={(navData) => (navData.isActive ? "active-style" :   'none')} style={{color: location ==='/'?'': '#515151'}}>Product List &nbsp;
                  <i className="fa-solid fa-chevron-down icon-style"></i>
                  </NavLink>
                  <div className="nav-main-mobile-ul-li-dropdown" >
                    <ul className="nav-main-mobile-ul-li-dropdown-sub">
                      <li className="nav-main-mobile-ul-li-dropdown-sub-list">
                        <img src={tableicon} alt="table" className='iconitems' /> 
                        <span> Tables</span>
                        <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                          {menulist.Tables.map((items,index) => {
                            return (
                              <li key = {items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                                <Link to={`products/${items.id}`}   className='nav-main-mobile-ul-li-dropdown-sub-items'> {items.Name}</Link>
                              </li>
                            )
                          } )}
                        </ul>
                      </li>
                      <li className="nav-main-mobile-ul-li-dropdown-sub-list">
                        <img src={chairicon} alt="table" className='iconitems' /> 
                        <span> Chairs</span>
                        <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                          {menulist.Chairs.map((items,index) => {
                            return (
                              <li key = {items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                                <Link to={`products/${items.id}`}   className='nav-main-mobile-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                              </li>
                            )
                          } )}
                        </ul>
                      </li>
                      <li className="nav-main-mobile-ul-li-dropdown-sub-list">
                        <img src={sofaicon} alt="sofa" className='iconitems' /> 
                        <span> Sofas</span>
                        <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                          {menulist.Sofas.map((items,index) => {
                            return (
                              <li key = {items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                                <Link to={`products/${items.id}`}   className='nav-main-mobile-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                              </li>
                            )
                          } )}
                        </ul>
                      </li>
                      <li className="nav-main-mobile-ul-li-dropdown-sub-list">
                        <img src={storageicon} alt="sofa" className='iconitems' /> 
                        <span> Storage</span>
                        <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                          {menulist.Storage.map((items,index) => {
                            return (
                              <li key = {items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                                <Link to={`products/${items.id}`}   className='nav-main-mobile-ul-li-dropdown-sub-items'>  {items.Name}</Link>
                              </li>
                            )
                          } )}
                        </ul>
                      </li>
                        
                    </ul>

                  </div>
                        
              </li>
              <li className="nav-main-mobile-ul-li">
                  <NavLink to="brands/1" className={(navData) => (navData.isActive ? "active-style" :   'none')} style={{color: location ==='/'?'': '#515151'}}>Brands &nbsp;
                    <i className="fa-solid fa-chevron-down icon-style"></i>
                  </NavLink>
                  <div className="nav-main-mobile-ul-li-dropdown"  >
                    <ul className="nav-main-mobile-ul-li-dropdown-sub"  style={{maxWidth:'fit-content'}}>
                    <li className="nav-main-mobile-ul-li-dropdown-sub-list" >
                        <ul className="nav-main-mobile-ul-li-dropdown-sub-list" >
                          {BrandList.map((items,index) => {
                            return (
                              <li key = {items.id} className='nav-main-mobile-ul-li-dropdown-sub-items' >
                                <Link to={`brands/${items.id}`}   className='nav-main-mobile-ul-li-dropdown-sub-items' >  {items.Name}</Link>
                              </li>
                            )
                          } )}
                        </ul>
                      </li>

                    </ul>
                  </div>
              </li>
              
          </ul>
          </div>
      </nav>
    </div>
  )
}

export default NavMain
