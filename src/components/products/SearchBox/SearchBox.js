import React from 'react'
import './SearchBox.scss'
import iconSearch from '../../../stories/icons/search.png'
function SearchBox() {
  return (
    <div className='searchbox'>
        <button>
            <img src={iconSearch} alt="iconsearch" />
        </button>
        <input type="text" placeholder='Search' />
    </div>
  )
}

export default SearchBox
