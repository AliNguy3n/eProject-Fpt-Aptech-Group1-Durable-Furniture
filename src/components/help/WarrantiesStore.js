import React from 'react'
import './HelpofStoreStyle.scss'
import imgbannerservices from '../../assets/images/ServicesImages/banner-main.jpg';
function WarrantiesStore() {
  return (
    <div className='faqstore'>
        <div className='faqstore-banner'>
            <div className='faqstore-banner-title'>
                <h1>WARRANTIES </h1>
                <h1>DURABLE FURNITURES </h1>
                <p>Creative collaborations merge points of view with shared values for unique designs   and experiences.We always want our services to fully meet the wishes of our customers</p>
            </div>
            <div className='faqstore-banner-img'>
                <img src={imgbannerservices} alt="bannersevices" />
            </div>
        </div>
        <div className='faqstore-wrapper'>
            <div className='faqstore-wrapper-item'>
                <h2>5-YEAR WARRANTY ON ALL DURABLE FURNITURES PRODUCTS</h2>
                <ul>
                    <li>
                    At DURABLE FURNITURES, we develop beautiful designs from the best materials to ensure a high, enduring quality. That's why we offer a 5-year warranty on all our product designs - but of course we expect them to last even longer.
                    </li>
                    <li>
                        The warranty provided by BoConcept A/S is valid according to the terms and  conditions set out in these warranty terms and is a very special extra service   we offer in addition to the statutory warranty. The warranty therefore does not   affect your mandatory rights under applicable law.
                    </li>
                </ul>
            </div>
            <div className='faqstore-wrapper-item'>
                <h2>WHAT IS COVERED BY THE WARRANTY?</h2>
                <ul>
                    <li>The warranty covers material and workmanship defects on all products from our entire collection, ensuring that defects are corrected, or the product is replaced within the warranty period.
                    </li>


                </ul>
            </div>
            <div className='faqstore-wrapper-item'>
                <h2>WHAT IS NOT COVERED BY THE WARRANTY?</h2>
                <ul>
                    <li>
                    General wear and tear, cut marks, scratches or other damage caused by improper use, accidents, knocks or external damage and discolouration caused by improper use or handling;
                    </li>
                    <li>
                    Damage and discolouration caused by lack of or incorrect care/maintenance in accordance with BoConcept care instructions;
                    </li>
                    <li>
                    Products that have been stored, mounted or used improperly, misused or altered, and products that have been exposed to high temperature fluctuations, placed in direct sunlight, or in an environment for which the product is not suitable, for example outdoors or in a damp environment such as a bathroom.
                    </li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default WarrantiesStore
