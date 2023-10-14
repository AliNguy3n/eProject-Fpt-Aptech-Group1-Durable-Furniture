import React from 'react'
import './HelpofStoreStyle.scss'
import imgbannerservices from '../../assets/images/ServicesImages/banner-main.jpg';

function ProductRecall() {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  return (
    <div className='faqstore'>
            <div className='faqstore-banner'>
                <div className='faqstore-banner-title'>
                    <h1>RECALL PRODUCTS </h1>
                    <h1>DURABLE FURNITURES </h1>
                    <p>The safety and quality of our products is of the utmost importance to us. When   product recalls for safety or quality issues are necessary, we aim to facilitate  seamless and swift resolutions by first emailing customers impacted by these recalls. 
                    </p>
                </div>
                <div className='faqstore-banner-img'>
                    <img src={imgbannerservices} alt="bannersevices" />
                </div>
            </div>
            <div className='faqstore-wrapper'>
                <div className='faqstore-wrapper-item'>
                    <h2>If you posses a recalled product listed below and have not yet been contacted by a  Durable Funitures representative, we ask that you please:</h2>
                    <ul>
                        <li>
                            Stop using the product immediately.
                        </li>
                        <li>
                            Place the product in an area where a child cannot access it.
                        </li>
                        <li>
                            Email Durable Furnitures at recall_info@durablefurnitures.com
                        </li>
                    </ul>
                </div>
                <div className='faqstore-wrapper-item'>
                    <h2>If email, please include "Product Recall" in the subject line, and the following    information in the body of your message:</h2>
                    <ul>
                        <li>The warranty covers material and workmanship defects on all products from our   entire collection, ensuring that defects are corrected, or the product is replaced    within the warranty period.
                        </li>


                    </ul>
                </div>
                <div className='faqstore-wrapper-item'>
                    <h2>WHAT IS NOT COVERED BY THE WARRANTY?</h2>
                    <ul>
                        <li>
                        General wear and tear, cut marks, scratches or other damage caused by improper use,     accidents, knocks or external damage and discolouration caused by improper use or   handling;
                        </li>
                        <li>
                        Damage and discolouration caused by lack of or incorrect care/maintenance in    accordance with BoConcept care instructions;
                        </li>
                        <li>
                        Products that have been stored, mounted or used improperly, misused or altered, and     products that have been exposed to high temperature fluctuations, placed in direct  sunlight, or in an environment for which the product is not suitable, for example    outdoors or in a damp environment such as a bathroom.
                        </li>

                    </ul>
                </div>
            </div>
    </div>
  )
}

export default ProductRecall
