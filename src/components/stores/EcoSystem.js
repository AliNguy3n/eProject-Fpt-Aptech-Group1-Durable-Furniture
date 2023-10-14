import React from 'react'
import './StoresDura.scss'
import image1 from '../../assets/images/Stores/storepage-banner.jpg'

function EcoSystem() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='storesdura'>
            <div className="storesdura-banner">
                <img className='storesdura-banner-img' src={image1} alt="banner" />
                <div className="storesdura-banner-cover">
                    <h1>ECOSYSTEM OF DURABLE FURNITURES</h1>
                </div>
            </div>
            <div className='storesdura-wrapper1'>
                <div className='storesdura-wrapper1-content1'>
                    <div className='storesdura-wrapper1-content1-item1'>
                        <h2>Environmentally friendly furniture: what it is and characteristics</h2>
                    </div>
                    <div className='storesdura-wrapper1-content1-item1'>
                        <ul>
                            <li>
                            Ecological awareness is a term that has taken off in recent years, and with good reason. Caring for the environment and the sustainability of the planet cannot be left aside and nowadays not only can it be applied to food or cosmetics, but also the world of furniture is becoming familiar with this trend and more and more companies are opting to manufacture environmentally friendly furniture.
                            </li>
                        </ul>
                    </div>
                    <div className='storesdura-wrapper1-content1-item1'>
                        <h2>What is environmentally friendly furniture?</h2>
                    </div>
                    <div className='storesdura-wrapper1-content1-item1'>
                        <ul>
                            <li>
                            The concept of “environmentally friendly furniture” or “ecological furniture” may seem very broad, but we could define it as all those pieces of furniture that are composed of natural or recycled materials without any type of additive that alters them and manufactured in the most respectful conditions both for the environment and for people. In addition, this type of furniture, in most cases, is handmade.
                            </li>
                            <li>
                            The woods used for the manufacture of an eco friendly couch or ecological furniture in general are “eco-certified”, called PEFF or FSC certified and do not contain volatile organic compounds. In the case of the coverings, they are mostly jute, wool, cotton, linen… Always 100% natural and organic.
                            </li>
                        </ul>
                        
                    </div>
                    <div className='storesdura-wrapper1-content1-item1'>
                        <h2>Characteristics of environmentally friendly furniture</h2>
                    </div>
                    <div className='storesdura-wrapper1-content1-item1'>
                        <ul>
                            <li>
                            In order to classify a piece of furniture as eco-friendly, the life cycle of the product must be taken into account: conception and design, raw materials, the production process and the sale and distribution of the product.
                            </li>
                            <li>
                            When it comes to conceiving and designing ecological furniture, designers do so under a sustainable and ethical conception. Their aim is to manufacture durable, sustainable furniture with a friendly production based on the circular economy model, leaving aside the obsolescence that is assigned to many conventional furniture.
                            </li>
                            <li>
                            t is also important that the furniture is easy to dismantle, especially so that it can be better recycled. This type of furniture will be manufactured trying to optimise the use of raw materials and energy resources as much as possible, as well as trying to minimise CO2 emissions and reducing the environmental impact.
                            </li>
                            <li>
                            Appropriate sourcing and use of raw materials
                            The materials from which eco-friendly furniture is made should be natural, recycled or organically and sustainably produced.
                            </li>
                        </ul>
                        
                    </div>
                </div>
              
            </div>
        </div>
  )
}

export default EcoSystem
