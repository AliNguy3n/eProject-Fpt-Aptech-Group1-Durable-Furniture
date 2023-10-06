import './Produce.scss'
import React from 'react'
import PostData from "./data.json"
import { useState ,useEffect, useRef } from "react";
import logomain from '../../assets/images/logomain.png'

function Produce() {
  let inputSearch = useRef(null);
  useEffect(() =>{
      inputSearch.current.focus();
  })
  const [ stockvalue ,setStockValue ] = useState("")
  const [ searchTitle ,setSearchTitle ] = useState("")
  const [post, setPost] = useState(PostData);
  console.log("Du lieu post", PostData);
  const handleSearchTitle = (event) =>{
    const value = event.target.value;
    console.log("show Value", value);
    console.log("show Stock value",stockvalue);
    setSearchTitle(value)}
  
  const handleoutStock = () =>{

  }
  const handleAll = () =>{

  }

  return (
    <div className='produce'>
      <h2>Product List</h2>
      <div className='produce-form-input'>
            <label htmlFor="" >Name: </label>
            <input type="text" className='form-register-input-name' placeholder='Enter Produce Name' ref={inputSearch} onChange={handleSearchTitle} />
        </div>
        <div className='produce-form-checkbox' >
            <label htmlFor="" > </label>

              &nbsp;&nbsp;&nbsp;In-Stock <input type="radio" name="employ" id="" value={"in-stock"} onClick={()=> setStockValue("True")} />
             &nbsp;&nbsp;&nbsp;Out-Stock <input type="radio" name="employ" id="" value={"out-stock"} onClick={()=> setStockValue("False")}  />
             &nbsp;&nbsp;&nbsp;All <input type="radio" name="employ" id="" value={"all"} onClick={()=> setStockValue("")}  />
            
        </div>
        <table className='produce-post'>
          <tbody>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </tbody>
          {PostData.filter((items) => {
                    if(searchTitle === "" && stockvalue === ""){
                        return items;
                    } else if(
                        items.name.toLowerCase().includes(searchTitle.toLowerCase()) 
                        
                    ){
                        return items;
                    } else {
                        return null;
                    }
                }).filter((items) => {
                  if( stockvalue ===""){
                    return items;
                  } else if ( items.stock === stockvalue){
                    return items;
                  } else {
                    return null;
                  }
                }).map((items,index)=>(
                    <tbody className="item-post" key={index}>
                      <>
                      <tr>
                        <td>{items.no}</td>
                        <td>{items.id}</td>
                        <td><img src={items.img} alt="" style={{width:"auto",height:"50px"}} /></td>
                        <td>{items.name}</td>
                        <td>{items.price}</td>
                        <td>{items.stock}</td>
                      </tr> 
                      </>
                    </tbody>)  
                )}
        </table>
    </div>
  )
}

export default Produce
