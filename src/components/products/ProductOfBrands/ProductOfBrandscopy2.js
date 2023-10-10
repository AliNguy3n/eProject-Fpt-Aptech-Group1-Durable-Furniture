import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductOfBrands.scss'
import '../ProductDetailsCard/ProductDetailsItems'
import ProductDetailsItems from '../ProductDetailsCard/ProductDetailsItems'
import SearchBox from '../SearchBox/SearchBox'

import ProductMix from '../Products/ProductMix.json'
import Products from '../Products/Products.json'
import ProductBanner01 from '../../../assets/images/ProductOfBrands/DarableFurnitureBanner.png'

function ProductOfBrands() {
  const {id} = useParams();
  console.log('gia tri cua id Params:',id)
  const ProductList = Object.entries(ProductMix);
  let accordion = [];
  const [searchkey, setSearchkey] = useState();
  let ProductsofBrand = Products.filter((items) => items.brand.id ===id)
 
  Object.entries(ProductList).map((items,index)=>{
    return(accordion[index] = false)
  })
  const [itemMenustate, setItemMenustate] = useState(accordion);
  
  let handleAccor = (index) => {
    const itemstate = itemMenustate.map((ite,ind) =>{
      if(ind === index){
        return ite = !ite;
      }else {
        return ite
      }
    });
    setItemMenustate(itemstate)
  }

  
  let handleSearchkey = (value) =>{
    setSearchkey(value.Name);
  }
  
  return (
    <div className='productsbrandpage'>
        <div className='productsbrandpage-banner'>
          <img src={ProductBanner01} alt="banner01" className='productsbrandpage-banner-img'/>
          <div className='productsbrandpage-banner-title'>
            <h1>DURABLE FURNITURES</h1>
            <h3>TIMELESS ELEGANCE</h3>
            <h5>A style composed of minimalist lines, harmonious colours, sophisticated materials and   precious details, in the firm belief that the quality of style improves the living experience.</h5>
          </div>
        </div>
        <div className='productsbrandpage-control'>
          <div className='productsbrandpage-control-left'>
            <SearchBox/>
          </div>
          <div className='productsbrandpage-control-center'>
            <p>{searchkey}</p>
          </div>
          <div className='productsbrandpage-control-right'>
            <label htmlFor="">Sort by:&nbsp;</label>
              <select name="select" id="select01">
                <option value="Most Popular">Most Popular</option>
                <option value="New">New</option>
                <option value="Rating">Rating</option>
                <option value="Price Ascending">Price: Low to High</option>
                <option value="Price Descending">Price: High to Low</option>
              </select>

          </div>
        </div>
        <div className='productsbrandpage-main'>
          <div className='productsbrandpage-main-sidebar'>
          <div className='accordionMenu'>
            {ProductList.map((items ,index ) =>{
              return(
                <div className='accordionMenu-item' key={index}>
                  <div className='accordionMenu-item-title' onClick={() => handleAccor(index)} >
                    <p>{items[0]}</p>
                  <div className={itemMenustate[index] ?    'accordionMenu-item-title-arrow-up':'accordionMenu-item-title-arrow'}><i   className="fa-solid fa-chevron-down"></i>
                  </div>
              </div>
              <div className={itemMenustate[index] ? 'accordionMenu-item-content-open'
               : 'accordionMenu-item-content' }>
                {items[1].map((temp, indicator) =>{
                  return(
                    <div className= 'accordionMenu-item-content-open-container' key={indicator}>
                      <p>{temp.Name}</p>
                      <input type="checkbox" name={temp.Name} id={temp.Name} value={temp.Name} onChange={() =>handleSearchkey(temp)}/>
                    </div>
                
                  )})}
              </div>
            </div>
                
              )
            })}


      </div>
          </div>
          <div className='productsbrandpage-main-container'>
            {ProductsofBrand.map((items, index) =>{
              return(
                <div className='productsbrandpage-main-container-items' key={index}>
                    <ProductDetailsItems id={items.id} name={items.name} categories={items.categories.name} 
                      price={items.price} status={items.status} brand={items.brand.name}
                      images={items.imagesPreview[0].path} rating={items.rating}
                    />
                </div>

              )
            })}
            <div className='productsbrandpage-main-container-items'>
            </div>
          </div>

        </div>
      </div>  
    )
}

export default ProductOfBrands
