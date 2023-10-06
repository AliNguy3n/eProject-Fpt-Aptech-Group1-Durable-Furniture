import React from "react";

import { useLocation } from 'react-router-dom';
import "./TopBars.scss";
import Search from "./Search";
import LogoMain from "./LogoMain"
import '../../styles/VariableStyle.scss'

function TopBars() {
  let location = useLocation().pathname;
 
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <LogoMain />
      </div>
      <div className="top-bar-center">
        <Search />
      </div>
      <div className="top-bar-right">
        <div className="title-bar" style={{color: location ==='/'?'': '#515151'}}>
          Ali. &nbsp;
          <i className="fa-solid fa-user cart" style={{color: location ==='/'?'': '#515151'}}>&nbsp;</i>
        </div>
        <div className="top-bar-cart" >
          <i className="fa-solid fa-cart-plus cart" style={{color: location ==='/'?'': '#515151'}}>&emsp;</i>
        </div>
        <div className="top-bar-find" >
          <i className="fa-solid fa-location-dot cart" style={{color: location ==='/'?'': '#515151'}}>&emsp;</i>
        </div>

      </div>
    </div>
  );
}

export default TopBars;

