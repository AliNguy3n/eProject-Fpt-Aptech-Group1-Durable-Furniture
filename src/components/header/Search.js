import React from "react";

import './Search.scss'
import { Link, useLocation } from 'react-router-dom';

function Search({handleSeachProduct}) {
  let location = useLocation().pathname;
  const handleSearchEvent = (event) =>{
    console.log('gia tri cua search',event.target.value)
    handleSeachProduct(event.target.value)
  }
  return (
    <div className="search">
      <form action=""  >
      <label htmlFor="">
          <input type='text' className="input-style"  onChange={(value) => handleSearchEvent(value)}/>
          <Link to='products'  >
            <input type="submit" value="Search"  className="button-style"   style={{color: location ==='/' ? '': '#515151'}}/>
          </Link>
          
      </label>
      </form>
    </div>
  );
}

export default Search;
// disabled={location ==='/'? false: true}
//Ali Nguy3n