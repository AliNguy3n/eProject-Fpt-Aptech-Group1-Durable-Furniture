
import './SearchBox.scss'
import iconSearch from '../../../stories/icons/search.png'

function SearchBox({handleSeachKey}) {

  let handleChangeValue = (event) =>{
    let keyLower = event.target.value.toLowerCase()
    handleSeachKey(keyLower)
    console.log("Key Seacher tu thang con",keyLower)
  }
  
  return (
    <div className='searchbox'>
        <button type='submit'  >
            <img src={iconSearch} alt="iconsearch" />
        </button>
        <input type="text" placeholder='Search' onChange={(event) =>handleChangeValue(event)} /> 
    </div>
  )
}

export default SearchBox
