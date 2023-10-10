import React from 'react'
import { useLocation } from 'react-router-dom';
import './Header.scss'
import TopBars from './Topbars'
import NavMain from '../navigation/NavMain'
function Header(props) {
    let location = useLocation();
  return (
    <div className={location.pathname ==='/' ? 'header-disable': 'header-active'}>
        <div className='topbar-nav-main'>
            <TopBars handleSeachProduct={props.handleSeachProduct} indexofCart={props.indexofCart} />
            <NavMain />
        </div>

    </div>
  )
}

export default Header
