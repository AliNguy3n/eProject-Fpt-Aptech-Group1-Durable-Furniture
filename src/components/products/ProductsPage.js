import React from 'react'
import { useState } from 'react'
import './ProductsPage.scss'
import './ProductDetailsCard/ProductDetailsItems'
import ProductDetailsItems from './ProductDetailsCard/ProductDetailsItems'
import SearchBox from './SearchBox/SearchBox'
import Brands from './Products/Brands.json'
import ProductMix from './Products/ProductMix.json'
import Products from './Products/Products.json'
import ProductBanner01 from '../../assets/images/ProductPage/BannerProductsPage-01.png'
function ProductsPage() {
  const BrandsList = Brands;
  const ProductList = Object.entries(ProductMix);
  let accordion = [];
  const [searchkey, setSearchkey] = useState();
  const ProductsData = Products;
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
  console.log('Tu khoa search:',searchkey);
  return (
    <div className='productspage'>
      <div className='productspage-banner'>
        <img src={ProductBanner01} alt="banner01" className='productspage-banner-img'/>
        <div className='productspage-banner-title'>
          <h1>PRODUCTS</h1>

          <h3>TIMELESS ELEGANCE</h3>
          <h5>A style composed of minimalist lines, harmonious colours, sophisticated materials and precious details, in the firm belief that the quality of style improves the living experience.</h5>
        </div>
      </div>
      <div className='productspage-control'>
        <div className='productspage-control-left'>
          <SearchBox/>
        </div>
        <div className='productspage-control-center'>
          <p>{searchkey}</p>
        </div>
        <div className='productspage-control-right'>
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
      <div className='productspage-main'>
        <div className='productspage-main-sidebar'>
        <div className='accordionMenu'>
        <div className='accordionMenu-item' >
            <div className='accordionMenu-item-title' >
                  <p>Brands:</p>
            </div>
            <div className= 'accordionMenu-item-content-open'>
              {BrandsList.map((items, index) =>{
                return(
                  <div className= 'accordionMenu-item-content-open-container' key={index}>
                    <p>{items.Name}</p>
                    <input type="checkbox" name={items.Name} id={items.Name} value={items.Name} onChange={()=>handleSearchkey(items)} />
                  </div>
                
                )})}
            </div>
          </div>

          {ProductList.map((items ,index ) =>{
            return(
              <div className='accordionMenu-item' key={index}>
                <div className='accordionMenu-item-title' onClick={() => handleAccor(index)} >
                  <p>{items[0]}</p>
                <div className={itemMenustate[index] ? 'accordionMenu-item-title-arrow-up':'accordionMenu-item-title-arrow'}><i className="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            <div className={itemMenustate[index] ? 'accordionMenu-item-content-open'
             : 'accordionMenu-item-content' }>
              {items[1].map((temp, indicator) =>{
                return(
                  <div className= 'accordionMenu-item-content-open-container' key={indicator}>
                    <p>{temp.Name}</p>
                    <input type="checkbox" name={temp.Name} id={temp.Name} value={temp.Name} onChange={()=>handleSearchkey(temp)}/>
                  </div>
                
                )})}
            </div>
          </div>
              
            )
          })}

  
    </div>
        </div>
        <div className='productspage-main-container'>
          {ProductsData.map((items, index) =>{
            return(
              <div className='productspage-main-container-items' key={index}>
                  <ProductDetailsItems id={items.id} name={items.name} categories={items.categories.name} 
                    price={items.price} status={items.status} brand={items.brand.name}
                    images={items.imagesPreview[0].path} rating={items.rating}
                  />
              </div>

            )
          })}
          <div className='productspage-main-container-items'>
          </div>
        </div>

      </div>
    </div>  
  )
}

export default ProductsPage
