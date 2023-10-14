import React from 'react'
import './AboutUs.scss'
import image1 from '../../assets/images/AboutImages/durable-company.png'
import image2 from '../../assets/images/AboutImages/Founder-removebg-preview.png'
import image3 from '../../assets/images/AboutImages/Durable-style.jpg'
import image4 from '../../assets/images/AboutImages/factory-furniture.jpg'
import image5 from '../../assets/images/AboutImages/banner_aboutus.jpg'

function AboutUs() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='about-us'>
        <div className="about-us-banner">
            <img className='about-us-banner-img' src={image5} alt="banner" />
            <div className="about-us-banner-cover">
                <h1>About Us</h1>
            </div>
           
        </div>
        
        <div className='about-us-content'>
       
        <div className='about-us-content-col1-7'>
            <h2 >HISTORY</h2>
                <p >Born from the idea of making a difference, Durable Furniture has maintained and developed to become a leading position in the Vietnamese furniture market. Up to now, Durable Furnitures has had many large-scale and professional stores in big cities such as Hanoi and Ho Chi Minh City. HCMC, Binh Duong.</p>
        </div>
        <div className='about-us-content-col1-5'>
            <img src={image1} alt="image1-about" />
        </div>
        <div className='about-us-content-col5-7'>
            <p ><strong >2023:</strong> Affirming a sustainable brand with new developments despite facing difficulties due to the Covid    epidemic. The store system expanded, with a new showroom in Ho Chi Minh.</p>
            <p ><strong>2021:</strong> The owner of Durable Furniture – ALI Furniture Group restructured to become a member of DRULI    Corporation – Asia's leading high-quality furniture manufacturing and construction group.</p>
            <p ><strong>2019:</strong> This is a special year of the Durable Furnitures brand – Marking 20 years of development. With the   appearance of 2 stores in Da Nang City and Binh Duong</p>
            <p ><strong>2014:</strong> Expanding Durable Furnitures system with 2 large stores in the heart of Hanoi capital in Hoan Kiem   district and Dong Da district.</p>
            <p ><strong >2011 – 2014</strong>: Affirming the brand with the appearance of 2 new stores in Hanoi.</p>
            <p ><strong>2005 – 2010:</strong> Strongly developed with stores in new urban areas such as Durable Furnitures Phu My Hung  and Durable Furnitures Centre – the central area of District 1.</p>
            <p><strong>2002 – 2005:</strong> Durable Furnitures in Hanoi and Durable Furnitures Citimart in Ho Chi Minh City HCM aims to    improve the system and better serve customers.</p>
            <p ><strong >2000:</strong> Born with 2 large stores in Hanoi and Ho Chi Minh City. HCM, bold style in design and layout.</p>
                
        </div>
        <div className='about-us-content-col1-3'>
            <div className='about-us-content-portrait'>
                <img src={image2} alt="image1-about" />
            </div>
            
        </div>
        <div className='about-us-content-col3-7' >
		    <h3><b >Founder</b></h3>
            <p >Mr. Nguyen Duc Linh is the founder of DRULI Group, Durable Furniture brand and currently holds the position of CEO Woodworking Association. As an architect and interior designer, he is passionate about the wood industry as well as the ambition to bring Vietnamese brands to the world.</p>
        </div>
        <div className='about-us-content-col1-4' >
            <h3 >Values and differences</h3>
            <p >With the desire to develop Vietnamese brands with internal resources, Durable Furnitures has focused on domestic furniture design and production. DRULI's product portfolio is constantly renewed and updated, continuously          providing customers with product lines according to the latest trends. Designed and manufactured by Vietnamese people, Durable Furnitures brand furniture is always suitable for Asian life, bringing perfect comfort in all living spaces.</p>
            <p>More than 70% of Durable Furnitures' products are designed and manufactured by a team of excellent employees and workers with the factory with the most modern facilities in Vietnam.</p>
            <p >The difference of Durable Furniture is to create furniture into its own style, suitable for customer needs. Not only a simple interior product, but also an idiosyncratic living space with a harmonious layout from furniture          combined with decorations. Help customers feel a real living space, feel comfortable to enjoy life.</p>
            <div >
            <h3 >Quality and service</h3>
            <p >The quality of raw materials, accessories and production processes are strictly tested and           monitored by the ISO 9001 quality management system. Durable Furnitures products are designed in the direction of usability,        aesthetics and quality. In recent years, the brand has always aimed at green design trends to contribute not only a comfortable     living space but also a fresh living environment for users and the community. With such dedication, Durable Furnitures is honored to          be awarded the titles of "Vietnamese High Quality Goods" for many consecutive years, "Top 100 leading suppliers".</p>
            <p >Besides, Durable Furnitures is proud to own a team of professional design consultants and            engineers, with extensive knowledge in the field of wooden furniture. The staff at Durable Furnitures is committed to advising and          assisting customers to choose the best product. Design consulting services of Durable Furnitures will help customers create a       satisfactory living space through skillful coordination between furniture products and decorations.</p>
        </div>
        </div>
        <div className='about-us-content-col4-7'>
            <img src={image3} alt="image1-about" />
        </div>
        <div className='about-us-content-col1-5'>
            <img src={image4} alt="image1-about" />
        </div>
        
        <div className='about-us-content-col5-7'>
            <h3 >Factory</h3>
            <p >Most of Durable Furnitures' products are manufactured at AA Corporation's factory (DRULI Q9,             Ho Chi Minh City) with an area of 80,000m2, with the most modern equipment and ISO 9001 standards, specializing in manufacturing high           quality furniture products for hotels,  5-star restaurant, high-end furniture project and export.</p>
            <h3>Durable Furnitures and Community</h3>
            <p >Contributing to the community is part of Durable Furnitures' mission. To become a             pioneering and civilized brand, Durable Furnitures has carried out many community activities such as supporting poor children,          participating in environmental activities such as green design, charity walking,... Non-stop footsteps and actions to contribute to a           better life.</p>
        </div>
    </div>
    </div>

  )
}

export default AboutUs
