import React from 'react'
import './BestSellers.scss'
import Products from '../products/Products/Products.json'
import ProductDetailsItems from '../products/ProductDetailsCard/ProductDetailsItems'
import { Link } from 'react-router-dom'
function BestSellers({handleAddComp,handleCarts}) {
    let topProducts = Products.filter((items) => items.top ==='1').slice(0,4);
  return (
    <div className='bestsaler'>
        <h3>Best Salers</h3>
        <h5 className='bestsaler-button'>
           <Link to="/products" >
                More... &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
            </Link>
        </h5>
        <div className='bestsaler-container'>
            {topProducts.map((items,index) =>{
                return(
                    <div className='bestsaler-container-item' key={index}>
                        <ProductDetailsItems id={items.id} name={items.name} 
                        price={items.price} status={items.status} brand={items.brand.name} images={items.imagesPreview[0].path} rating = {null} handleAddComp={handleAddComp} handleCarts={handleCarts} colorstate ={items.detail.color[0]}/>
                    </div>

                )
            })}
            
        </div>
        
    </div>
  )
}

export default BestSellers
