import React from 'react'
import { useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import './ProductOfBrands.scss'
import ProductDetailsItems from '../ProductDetailsCard/ProductDetailsItems'
import ProductMix from '../Products/ProductMix.json'
import Products from '../Products/Products.json'
import Pagination from '../../Pagination/Pagination'
import ProductBanner01 from '../../../assets/images/ProductOfBrands/DarableFurnitureBanner.png'
import ProductBanner02 from '../../../assets/images/ProductOfBrands/AshleyBanner.png'
import ProductBanner03 from '../../../assets/images/ProductOfBrands/Rowbanner.png'


function ProductOfBrands({handleAddComp,handleCarts,searchProduct}) {
  const Keyparam = useParams();
  const  Productsdata = (Keyparam.id === undefined ? Products : Products.filter( temp => temp.brand.id == Keyparam.id));
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  const [sortKey, setSortKey] =useState('');

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
  
  const [colorfilter, setColorfilter] = useState([
    {id:1, name:"black", checked: false},
    {id:2, name:"gray", checked: false},
    {id:3, name:"white", checked: false},
    {id:4, name:"blue", checked: false},
    {id:5, name:"pink", checked: false},
    {id:6, name:"brown", checked: false},
    {id:7, name:"orange", checked: false},
    {id:8, name:"beige", checked: false},
    {id:9, name:"green", checked: false},
    {id:10, name:"red", checked: false},
    {id:11, name:"yellow", checked: false},
  ])

  const ProductList = Object.entries(ProductMix);
  let accordion = [];
  const [pricesearch, setPricesearch] =useState('');

  const handleChangePrice =(value) =>{
    setPricesearch(value)
  }

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

  

  let handleCheckCategories =(id) =>{
    let updatecategories = categoriesCheckkey.map((item,index) =>{
      if(item.id === id){
        return{...item, checked : !item.checked}
      }else{ return item}
    });
    setCategoriesCheckkey(updatecategories);
  }
  let handleCheckColor = (id) =>{
    let updateColor = colorfilter.map((item,index) =>{
      if(item.id === id){
        return{...item, checked : !item.checked}
      }else{return item}
    })
    setColorfilter(updateColor)
  }

  let keysortCategories = categoriesCheckkey.filter((item) => item.checked === true).map((item)=> {return(item.name)})

  let keysortcolorfilter = colorfilter.filter((item) => item.checked === true).map((item)=> {return(item.name)})
  
  let sortData = (datainput) =>{

    let datasort1 = datainput.filter((item) =>{
      if( keysortCategories.length === 0){
        return true
      } else{
        return keysortCategories.includes(item.categories.name)
      }
    })
    
   let datasort2 =[];
   switch(sortKey){
      case 'Most Popular' :
         datasort2 = datasort1.sort((item1 ,item2) => parseFloat(item1.top) -parseFloat(item2.top));
        break;
      case 'Rating' :
        datasort2 = datasort1.sort((item1 ,item2) => parseFloat(item2.rating) -parseFloat(item1.rating));
        break;
      case 'Price Ascending' :
        datasort2 = datasort1.sort((item1 ,item2) => parseFloat(item1.price) -parseFloat(item2.price));
        break;
      case 'Price Descending' :
        datasort2 = datasort1.sort((item1 ,item2) => parseFloat(item2.price) -parseFloat(item1.price));
        break;
      default:
         datasort2 = datasort1;   
      }
      let datasort3 = datasort2.filter((item) =>{
        if( keysortcolorfilter.length === 0){
          return true
        } else{
           let colorsort = item.detail.color.map((temp,index) =>{
            return keysortcolorfilter.includes(temp)
          })
          return colorsort.includes(true);
        }
      })
    let datasort4 = datasort3.filter((item) =>{
    
    if(searchProduct === undefined || searchProduct ===''){
      console.log('Tham Chieu1',searchProduct === undefined )
      return item}
      else{
          let newdata = item.name.toLowerCase()
          return newdata.includes(searchProduct)
      }
    });
    let datasort5 =datasort4.filter((item) => {
      if(pricesearch === ''){
        return item
      }else{
        return parseFloat(item.price)  < parseFloat(pricesearch)
      }
      })

    return datasort5
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
    <div className='productsbrandpage'>
        <div className='productsbrandpage-banner'>
          <div className='productsbrandpage-banner-img'>
            <img src={Keyparam.id === '1'  ? ProductBanner01: (Keyparam.id === '2' ? ProductBanner02 : (Keyparam.id === '3' ? ProductBanner03: ProductBanner01))} alt="banner01" />
          </div>
          <div className='productsbrandpage-banner-title'>
            <h1>{Productsdata[0].brand.name.toLocaleUpperCase()}</h1>
            <h3>TIMELESS ELEGANCE</h3>
            <h5>A style composed of minimalist lines, harmonious colours, sophisticated materials and   precious details, in the firm belief that the quality of style improves the living experience.</h5>
          </div>
        </div>
        <div className='productsbrandpage-control'>
          <div className='productsbrandpage-control-left'>
            <h4>Color:</h4> <br />
            {colorfilter.map((temp, index) =>{
              return(
                <div  className='productsbrandpage-control-left-item'  key={temp.name}>
                  <div  className='productsbrandpage-control-left-item-color' style={{ border: temp.checked   === true? 'solid 2px 	#0080ff' : ''}}>
                    <div className={temp.name} >
                      <input type="checkbox" value={temp.name} name={temp.name} id={temp.name} onClick={() => handleCheckColor(temp.id)} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='productsbrandpage-control-center'>
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
          {searchProduct === undefined ? null : <div><p>{searchProduct}</p></div>  } 
          </div>
          <div className='productsbrandpage-control-right'>
            <label htmlFor="">Sort by:&nbsp;</label>
            <select name="select" id="select01" onChange={(event) =>setSortKey(event.target.value)} >
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
            <div className='price-search'>
              <div className='price-search-range'>
                <p>Price:</p>
                <h4>$:{pricesearch}</h4>
                <input type='range' min='1' max='3450'  onChange= {(event)=> handleChangePrice(event.target.value)} />
              </div>
            </div>
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
                      <input type="checkbox" name={temp.Name} id={temp.Name} value={temp.Name} onClick={()=>handleCheckCategories(temp.id)} defaultChecked={categoriesCheckkey[index].checked} />
                    </div>
                
                  )})}
              </div>
            </div>
                
              )
            })}


      </div>
          </div>
          <div className='productsbrandpage-main-container'>
          {currentPageData.length=== 0? <h4 className='productspage-main-container-alert'>The product you are looking for is being updated by the store. Sorry for the inconvenience!</h4> :
            currentPageData.map((items, index) =>{
              return(
                <div className='productsbrandpage-main-container-items' key={index}>
                    <ProductDetailsItems id={items.id} name={items.name} categories={items.categories.name} colorstate ={items.detail.color[0]}
                      price={items.price} status={items.status} brand={items.brand.name}
                      images={items.imagesPreview[0].path} rating={items.rating}
                      handleAddComp={handleAddComp} handleCarts={handleCarts} searchProduct={searchProduct}
                    />
                </div>

              )
            })}
            <div className='productsbrandpage-main-container-page'>
              <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
          </div>

        </div>
      </div>  
    )
}

export default ProductOfBrands
