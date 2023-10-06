import React from 'react'
import './ProductsComparision.scss'

function ProductsComparision(props) {
    let temp = props.dataComparision;
    console.log('tu thang compara',temp)
    let handleDelitem =(id)=>{
        props.handleDel(id)
    }
    if(temp ===''){
        return( 
            <div className='productscomparison-noProduct' >
                <h3>No products. Please add products...</h3>
            </div>
        )
    }else{
        return (
        <div className='productscomparison'>
            <div className='productscomparison-container'>
                <h2>Comparison Products</h2>
                <table className='table' >
                    <thead> 
                        <tr>
                            <th>Attribute</th>
                            {temp.map((item,index) =>{
                                return(
                                    <th key={item.id}>{item.name}</th>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Brand</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>{item.brand.name}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Categories</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>{item.categories.name}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Model</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>{item.model}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Status</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>{item.status}</td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Preview</td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index}>
                                    <img src= {item.imagesPreview[0].path} alt="" />
                                   </td>
                                )
                            })}
                        </tr>
                        <tr>
                            <td>Dimension</td>
                            {temp.map((item,index) =>{
                        return(
                            <td key={index}>Height: {item.detail.height} Width:{item.detail.width} Depth:{item.detail.depth}</td>
                        )
                            })}
                        </tr>
                        <tr>
                            <td className='table-remove' ></td>
                            {temp.map((item,index) =>{
                                return(
                                    <td key={index} className='table-remove' >
                                        <button type="button" className='table-remove-button' onClick={()   =>     handleDelitem(item.id)} >Remove</button>
                                    </td>
                                )
                            })}
                        </tr>
                    </thead>   
                </table>
                        


            </div>
        </div>
      )}
}

export default ProductsComparision
