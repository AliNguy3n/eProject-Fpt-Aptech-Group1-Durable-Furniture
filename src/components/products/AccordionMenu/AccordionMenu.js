import React, { useState } from 'react'
import './AccordionMenu.scss'
function AccordionMenu() {
    const [itemMenustate, SetItem] = useState(false);
  return (
    <div className='accordionMenu'>
       <p> Accordion Menu</p>
        <div className='accordionMenu-item' >
           <div className='accordionMenu-item-title' onClick={() => {SetItem(!itemMenustate)}}>
                <p>Items1</p>
                <div className={itemMenustate ? 'accordionMenu-item-title-arrow-up':'accordionMenu-item-title-arrow'}><i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            <div className={itemMenustate ? 'accordionMenu-item-content-open'
             : 'accordionMenu-item-content' }>
             <p>Lorem ipsum dolor </p>
             </div>
        </div>
        <div className='accordionMenu-item'>
          sdf
        </div>
    </div>
  )
}

export default AccordionMenu

