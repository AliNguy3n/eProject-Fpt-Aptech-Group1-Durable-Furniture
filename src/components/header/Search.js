import React from "react";
import './Search.scss'
import { Link, useLocation } from 'react-router-dom';

function Search({handleSeachProduct}) {
  let location = useLocation().pathname;
 
  return (
    <div className="search">
      <form action="">
      <label htmlFor="">
          <input type="text" className="input-style"  onChange={(event) =>handleSeachProduct(event.target.value)} />
          <Link to='products' >
            <input type="reset" value="Search"  className="button-style"   style={{color: location ==='/' ? '': '#515151'}}/>
          </Link>
          
      </label>
      </form>
    </div>
  );
}

export default Search;
// disabled={location ==='/'? false: true}
//Ali Nguy3n