import React, { useState } from 'react'
import './CartPage.scss'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/images/CartPage/Banner.png'
function CartPage(props) {
  const [datacart ,setDataCart] = useState(props.cart)
  let totalQuantity = 0;
  let totalCharge = 0;
  
  
  let handleAdd = (id) =>{
    const updatevalue = datacart.map((item,index) =>{
      if(item.id === id){
        return{...item, numberProduct : item.numberProduct + 1}
      }else{ return item}
    });
    setDataCart(updatevalue)
  }
  let handleSub = (id) =>{
    const updatevalue = datacart.map((item,index) =>{
      if(item.id === id){
        return{...item, numberProduct : item.numberProduct - 1}
      }else{ return item}
    });
    setDataCart(updatevalue)
  }
  console.log('Gia tri cua gio hang duoc cap nhat',datacart)
  datacart.map((item)=>{
    totalQuantity = totalQuantity + item.numberProduct
    return(totalQuantity)
  })
  datacart.map((item)=>{
    totalCharge = totalCharge + item.numberProduct*item.price;
    return(totalQuantity)
  })
  
  return (
    <div className='cartpage'>
      <div className="banner">
        <div>
        <h1>Your Cart</h1>
        <p>*Please check your shopping cart carefully before ordering products online.</p>
        </div>
        <img src={img1} alt="" />
      </div>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Products</th>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
              {datacart.map((temp,index) => {
                return(
                  <tr key= {index}>
                    <td>{index +1 }</td>
                    <td><img src={temp.imgPreview.path} alt={temp.name} /></td>
                    <td>{temp.name}</td>
                    <td>{`${temp.colorstate}`.toUpperCase()}</td>
                    <td>{temp.price}</td>
                    <td>
                      <div className='container-numbers'>
                        <button onClick={()=> handleSub(temp.id)}><h4>-</h4></button>
                        <h4>{temp.numberProduct}</h4>
                        <button onClick={()=> handleAdd(temp.id)}><h4>+</h4></button>
                      </div>
                    
                    </td>
                    <td>{(temp.price)*(temp.numberProduct)}</td>
                   
                  </tr>
                  
                )
              })}
            <tr>
              <td colSpan={"5"}>Total</td>
              <td >{totalQuantity} Unit</td>
              <td >{totalCharge} $</td>
              
            </tr>
          </tbody>
        </table>
        <div className="container-wrapper">
          <div className='container-wrapper-info'>
                  <input type="text" className='cart-text-input' required placeholder='FIRST NAME:' /><br/>

                  <input type="text" className='cart-text-input' required placeholder='LAST NAME:' /><br/>

                  <input type="number" className='cart-text-input' required placeholder='PHONE:' /><br/>
 
                  <textarea id="contact" name="contact" rows="4" cols="50" className='cart-text-area'  placeholder='Message' />
                  <input type="text" className='cart-text-input' required placeholder='YOUR EMAIL:' /><br/>
              </div>
          </div>
        <div className='submit' >
            <Link to='/SuccessPage'>
              <button type='button' className='submit-button' >
              Accept
              </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
