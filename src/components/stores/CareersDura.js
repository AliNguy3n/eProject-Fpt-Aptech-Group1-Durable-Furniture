import React from 'react'
import './StoresDura.scss'
import image1 from '../../assets/images/Stores/storepage-banner.jpg'

function CareersDura() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    return (
        <div className='storesdura'>
            <div className="storesdura-banner">
                <img className='storesdura-banner-img' src={image1} alt="banner" />
                <div className="storesdura-banner-cover">
                    <h1>CAREER</h1>
                </div>
            </div>
            <div className='storesdura-wrapper1'>
                <div className='storesdura-wrapper1-content1'>
                    <div className='storesdura-wrapper1-content1-item1'>
                        <h2>Do you want to be part of Durable Furnitures?</h2>
                    </div>
                    <div className='storesdura-wrapper1-content1-item1'>
                       <ul>
                            <li>
                                We are always on the look out for people who are the most professional  and dedicated in their field.
                            </li>
                            <li>
                                At Durable Furnitures, we celebrate diversity and are committed to  creating an inclusive environment for all employees. We welcome  applications from individuals of all backgrounds, experiences,   abilities, and perspectives.  
                            </li>
                            <li>
                                Our hiring decisions are driven by qualifications, skills, and the  ability to perform the job. We are proud to be an equal opportunity  employer. You are always welcome to send us an unsolicited application.
                            </li>
                            
                       </ul>
                    </div>
                    <div className='storesdura-wrapper1-content1-item1'>
                        <h4>Please create your application and send it to us at the email address : durablefurnitures@.email.com . We will contact you.</h4>
                    </div>

                </div>
               
            </div>
        </div>
    )
}


export default CareersDura
