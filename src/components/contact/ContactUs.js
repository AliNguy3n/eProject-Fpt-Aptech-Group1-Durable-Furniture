import React from 'react'
import './ContactUs.scss'
function ContactUs() {
  return (
    <div className='contact'>
        <div className='contact-wrapper'>
            <h1>Contact Us</h1>
            <div className='contact-wrapper-info'>
                <input type="text" className='text-input' placeholder='FIRST NAME:' /><br/>
               
                <input type="text" className='text-input' placeholder='LAST NAME:' /><br/>

                <input type="number" className='text-input' placeholder='PHONE:' /><br/>
                
                <textarea id="contact" name="contact" rows="7" cols="50" className='text-area' placeholder='Message' />
                <input type="text" className='text-input' placeholder='YOUR EMAIL:' /><br/>
                
                
                <button type="submit" className='submit-button' onClick={(event)=>(alert('Chúng tôi đã nhận được yêu cầu của bạn, vui lòng chờ lâu lâu lâu....!'))}>SUBMIT</button>
            </div>
            <div className='contact-wrapper-content'>
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
                   
                </div>
                <div>
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d979.830153144561!2d106.66551812845046!3d10.786737916740972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1696304006211!5m2!1svi!2s" width="450" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='contact-wrapper-content'>
                <div  style={{maxWidth:'400px'}}>
                    <h3>Visit a Showroom</h3>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                            240 Pham Van Dong, Hiep Binh Chanh, Thu Duc, Ho Chi Minh City
                    </p>
                    <p>
                        <i className="fa-solid fa-phone"></i>
                        <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
                        097 729 5813
                    </p>
                    <p>
                        <i className="fa-solid fa-at"></i>
                        <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
                        durableFurnitures@email.com.vn
                    </p>
                   
                </div>
                <div>
                    <iframe  title="map"  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d979.6956868435008!2d106.7208836!3d10.8279311!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1696304724372!5m2!1svi!2s" width="450" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
          
        </div>
    </div>
  )
}

export default ContactUs
