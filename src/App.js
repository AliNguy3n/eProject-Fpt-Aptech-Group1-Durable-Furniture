import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import FooterMain from './components/footer/FooterMain';
import Home from './components/home/Home';
import ProductsPage from './components/products/ProductsPage';
import ProductDetailPage from './components/products/ProductDetailPage/ProductDetailPage';
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contact/ContactUs';
import ProductOfBrands from './components/products/ProductOfBrands/ProductOfBrands';
import ProductsComparision from './components/products/ProductsComparison/ProductsComparision';
import ProductData from './components/products/Products/Products.json'
import { useState } from 'react';

function App() {
  const [ comparision, setComparision] = useState('');
  console.log('Du lieu thang Cha ',comparision)
  let handleDelComparison = (id)=>{
    const newcomparision = comparision.filter((temp) => temp.id !== id);
    setComparision((comparision)=>newcomparision);
  }
  let handleAddComparison = (id) =>{
    let newComp = ProductData.filter((item) => item.id===id)
    setComparision((comparision)=> [...comparision, newComp[0]])
  }
  console.log('Gia tri cua compasion',comparision)
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home handleAddComp={handleAddComparison}/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/products/detail/:id" element={<ProductDetailPage/>}/>
            <Route path="/detail/:id" element={<ProductDetailPage/>}/>
            <Route path="/brands/:id" element={<ProductOfBrands />}/>
            <Route path="/brands" element={<ProductOfBrands />}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/compare" element={<ProductsComparision handleDelComp={handleDelComparison} dataComparision={comparision}/>}/>
            
        </Routes>
        <FooterMain />
      </div>
    </Router>
  );
}

export default App;
