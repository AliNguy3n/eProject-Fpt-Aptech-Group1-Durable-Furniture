import React from "react";
import './Search.scss'
import { useLocation } from 'react-router-dom';
function Search() {
  let location = useLocation().pathname;
    const handleSearch = (event) =>{

        alert('Web mới làm! Có cái nịt gì đâu mà Seach.!');
    }
  return (
    <div className="search">
      <label htmlFor="">
        <input type="text" className="input-style" />
        <button className="button-style" onClick={(event)=>handleSearch(event)} style={{color: location ==='/'?'': '#515151'}}>Search</button>
      </label>
    </div>
  );
}

export default Search;
