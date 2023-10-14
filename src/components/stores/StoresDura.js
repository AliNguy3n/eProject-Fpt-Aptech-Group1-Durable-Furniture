import React from 'react'
import './StoresDura.scss'
import image1 from '../../assets/images/Stores/storepage-banner.jpg'
import image2 from '../../assets/images/Stores/storepage2.jpg'
import image3 from '../../assets/images/Stores/storepage.webp'
import image4 from '../../assets/images/Stores/instores.jpg'


function StoresDura() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='storesdura'>
        <div className="storesdura-banner">
            <img className='storesdura-banner-img' src={image1} alt="banner" />
            <div className="storesdura-banner-cover">
                <h1>STORES OF DURABLE FURNITURES</h1>
            </div>
        </div>
        <div className='storesdura-wrapper'>
            <div className='storesdura-wrapper-content'>
                <div style={{maxWidth:'400px'}}>
                    <h3>Headquarters</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                        590 D. Cach Mang Thang 8, Ward 11, District 3, Ho Chi Minh City
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
                        097 729 8513
                    </p>
                    <p>
                        <i className="fa-solid fa-at"></i>
                        <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
                        durableFurnitures@email.com.vn
                    </p>
                    <div>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d979.830153144561!2d106.66551812845046!3d10.786737916740972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1696304006211!5m2!1svi!2s" width="400" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className='storesdura-wrapper-content-img'>
                    <img src={image2} className='storesdura-wrapper-content-img' alt="store1" />
                </div>
            </div>
            <div className='storesdura-wrapper-content'>
                <div style={{maxWidth:'400px'}}>
                    <h3>Showrom 1</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                        240 Pham Van Dong, Hiep Binh Chanh, Thu Duc, Ho Chi Minh City
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
                        097 729 8513
                    </p>
                    <p>
                        <i className="fa-solid fa-at"></i>
                        <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
                        durableFurnitures@email.com.vn
                    </p>
                    <div>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d979.6956868435008!2d106.7208836!3d10.8279311!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1696304724372!5m2!1svi!2s" width="400" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className='storesdura-wrapper-content-img'>
                    <img src={image3} className='storesdura-wrapper-content-img' alt="store1" />
                </div>
            </div>
            <div className='storesdura-wrapper-content'>
                <div style={{maxWidth:'400px'}}>
                    <h3>Showrom 2</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                        30A Ly Thuong Kiet Ward, Hang Bai, Hoan Kiem, Hanoi, Vietnam
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
                        097 729 8513
                    </p>
                    <p>
                        <i className="fa-solid fa-at"></i>
                        <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
                        durableFurnitures@email.com.vn
                    </p>
                    <div>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19885.083228263753!2d105.82560273959247!3d21.02287818619506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8f86629bbb%3A0xa970add8d11e36c8!2zVCBQbGFjZSBQbGF6YSAzMEEgTMO9IFRoxrDhu51uZyBLaeG7h3Q!5e0!3m2!1svi!2s!4v1696933742846!5m2!1svi!2s" width="400" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className='storesdura-wrapper-content-img'>
                    <img src={image4} className='storesdura-wrapper-content-img' alt="store1" />
                </div>
            </div>
           
          
        </div>
    </div>
  )
}

export default StoresDura
