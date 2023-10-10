import React from 'react'
import { useState } from 'react'
import { useParams} from 'react-router-dom'
import './ProductsPage.scss'
import './ProductDetailsCard/ProductDetailsItems'
import ProductDetailsItems from './ProductDetailsCard/ProductDetailsItems'
import SearchBox from './SearchBox/SearchBox'
import Brands from './Products/Brands.json'
import ProductMix from './Products/ProductMix.json'
import Products from './Products/Products.json'
import Pagination from '../Pagination/Pagination'
import ProductBanner01 from '../../assets/images/ProductPage/BannerProductsPage-01.png'

function ProductsPage({handleAddComp,handleCarts,searchProduct}) {
  const Keyparam = useParams();
  const  Productsdata = (Keyparam.id === undefined ? Products : Products.filter( temp => temp.categories.id.toString() === Keyparam.id));

  const [searchkey, setSearchKey] = useState(searchProduct)  
  console.log('Seachkey tu Product',searchProduct)
  const [sortKey, setSortKey] =useState('');
  const [brandCheckKey, setBrandKey] = useState([
    {id:1, name:"Durable Funitures", checked: false},
    {id:2, name:"Ashley Furniture", checked: false},
    {id:3, name:"Aron Furniture", checked: false},
    {id:4, name:"Row Furniture", checked: false},
   
  ]);
  const [ categoriesCheckkey, setCategoriesCheckkey] =useState([
    {id:1, name:"Conference Tables", checked: false},
    {id:2, name:"Collaborative Tables", checked: false},
    {id:3, name:"Occasional Tables", checked: false},
    {id:4, name:"Outdoor Tables", checked: false},
    {id:5, name:"Shade Tables", checked: false},
    {id:6, name:"Armchairs", checked: false},
    {id:7, name:"Side Chairs", checked: false},
    {id:8, name:"Guest Chairs", checked: false},
    {id:9, name:"Conference Chairs", checked: false},
    {id:10, name:"Stools", checked: false},
    {id:11, name:"Lounge Chairs", checked: false},
    {id:12, name:"Outdoor Seating", checked: false},
    {id:13, name:"Benches", checked: false},
    {id:14, name:"Sofa Beds", checked: false},
    {id:15, name:"Fabric Sofas", checked: false},
    {id:16, name:"Leather Sofas", checked: false},
    {id:17, name:"Modular Sofas", checked: false},
    {id:18, name:"Chaise Longues", checked: false},
    {id:19, name:"Cabinets", checked: false},
    {id:20, name:"Wardrobes", checked: false},
    {id:21, name:"Cupboards", checked: false},
    {id:22, name:"Bookcases", checked: false},
    {id:23, name:"Shelvings", checked: false},
    {id:24, name:"TV Benches", checked: false},
  ])
  
  const BrandsList = Brands;
  const ProductList = Object.entries(ProductMix);
  let accordion = [];
  
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

  let handleCheckBrand =(id) =>{
    let updatevalue = brandCheckKey.map((item,index) =>{
      if(item.id === id){
        return{...item, checked : !item.checked}
      }else{ return item}
    });
    setBrandKey(updatevalue)
  }

  let handleCheckCategories =(id) =>{
    let updatecategories = categoriesCheckkey.map((item,index) =>{
      if(item.id === id){
        return{...item, checked : !item.checked}
      }else{ return item}
    });
    setCategoriesCheckkey(updatecategories);
  }

  let keysortBrands = brandCheckKey.filter((item) =>  item.checked === true).map((item)=> {return(item.name)})

  let keysortCategories = categoriesCheckkey.filter((item) => item.checked === true).map((item)=> {return(item.name)})
  let handleSeachKey = (SKey) =>{
    setSearchKey(SKey);
    console.log('Gia tri cua Skey',SKey)
  }
  
  let sortData = (datainput) =>{
    let datasort1 = datainput.filter((item) =>{
      if( keysortBrands.length === 0){
        return true
      } else{
        return keysortBrands.includes(item.brand.name)
      }
    })
    let datasort2 = datasort1.filter((item) =>{
      if( keysortCategories.length === 0){
        return true
      } else{
        return keysortCategories.includes(item.categories.name)
      }
    })
    
  
   let datasort3 =[];
   switch(sortKey){
      case 'Most Popular' :
         datasort3 = datasort2.sort((item1 ,item2) => item1.top -item2.top);
        console.log("sort key1", datasort3)
        break;
      case 'Rating' :
        datasort3 = datasort2.sort((item1 ,item2) => item2.rating -item1.rating);
        console.log("sort key2", datasort3)
        break;
      case 'Price Ascending' :
        datasort3 = datasort2.sort((item1 ,item2) => item1.price -item2.price);
        console.log("sort key3", datasort3)
        break;
      case 'Price Descending' :
        datasort3 = datasort2.sort((item1 ,item2) => item2.price -item1.price);
        console.log("sort key4", datasort3)
        break;
      default:
         datasort3 = datasort2;
         console.log("sort key4", datasort3)
   }
   let datasort4 = datasort3.filter((item) =>{
    
    if(searchkey === undefined || searchkey ===''){
      console.log('Tham Chieu1',searchkey === undefined )
      return item}
      else{
          let newdata = item.name.toLowerCase()
          return newdata.includes(searchkey)
      }
    });

    return datasort4
  }
  let ProductData1 = sortData(Productsdata) ;

  

  const PER_PAGE = 6;
  const [currentPage, setcurrentPage] =useState(0);
  const handlePageClick = ({selected: selecTedPage}) =>{
    setcurrentPage(selecTedPage)
  }
  const offset = currentPage * PER_PAGE;
  const currentPageData = ProductData1.slice(offset, offset +PER_PAGE);
  const pageCount = Math.ceil( Productsdata.length / PER_PAGE);
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
          <SearchBox handleSeachKey={handleSeachKey}/>
        </div>
        <div className='productspage-control-center'>
          {brandCheckKey.map((item,index)=>{
            if(item.checked === true){
              return(
                <div key= {index}>
                  <p>{item.name}</p>
                </div>
              )
            }
            else{return null}
          })}
          {categoriesCheckkey.map((item,index)=>{
            if(item.checked === true){
              return(
                <div key= {index}>
                  <p>{item.name}</p>
                </div>
              )
            }
            else{return null}
          })}
          {searchkey === undefined ? null : <div><p>{searchkey}</p></div>  }
        </div>
        <div className='productspage-control-right'>
          <label htmlFor="">Sort by:&nbsp;</label>
            <select name="select" id="select01" onChange={(event) =>setSortKey(event.target.value)} >
              <option value="Most Popular" >Most Popular</option>
              <option value="Rating">Rating</option>e
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
                    <input type="checkbox" name={items.Name} id={items.Name} value={items.Name} onClick={()=>handleCheckBrand(items.id)} defaultChecked={brandCheckKey[index].checked} />
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
                    <input type="checkbox" name={temp.Name} id={temp.Name} value={temp.Name} onClick={()=>handleCheckCategories(temp.id)} defaultChecked={categoriesCheckkey[index].checked} />
                  </div>
                
                )})}
            </div>
          </div>
              
            )
          })}

  
    </div>
        </div>
          <div className='productspage-main-container'>
            {currentPageData.length=== 0? <h4 className='productspage-main-container-alert'>The product you are looking for is being updated by the store. Sorry for the inconvenience!</h4> : currentPageData.map((items, index) =>{
              return(
                <div className='productspage-main-container-items' key={index}>
                    <ProductDetailsItems id={items.id} name={items.name} categories={items.categories.name} 
                      price={items.price} status={items.status} brand={items.brand.name}
                      images={items.imagesPreview[0].path} rating={items.rating} colorstate ={items.detail.color[0]} handleAddComp={handleAddComp} handleCarts={handleCarts}
                    />
                </div>

              )
            })}
            <div className='productspage-main-container-page'>
              <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
          </div>
          
         
      </div>
            
      
    </div>  
  )
}

export default ProductsPage
