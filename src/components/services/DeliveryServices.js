import React from 'react'
import './Services.scss'
import { useEffect } from 'react'
function DeliveryServices() {
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
  return (
    
    <div className='services'>
        <h1>Delivery Service</h1>
        <hr width="100%" ></hr>
        <p>With the criterion "Order once - Remember for a lifetime", DURABLE FUNITURES always puts customers' wishes and needs as top priority.</p>
        <p><b>DELIVERY FORM</b></p>
        <p>You can purchase products by coming directly to the store or ordering on our website or you can directly call the phone number, zalo: 0902565653. 0945779448</p>
        <p>DURABLE FUNITURES staff deliver: For orders placed in Saigon, Hanoi, Binh Duong, Dong Nai and neighboring provinces.</p>
        <p>Goods will be transported and installed by DURABLE FUNITURES interior staff</p>
        <p>For customers in small provinces, DUABLE FUNITURES cannot deliver to your door, DUABLE FUNITURES will send the vehicle to the customer. In case of sending via garage, customers please pay 100% of the total order value before DUABLE FUNITURES staff delivers the goods to customers.</p>
        <p><b>DELIVERY POLICY IN HANOI, HO CHI MINH CITY AND Neighbouring PROVINCES</b></p>
        <p>Free delivery for orders over 10,000,000 VND within a radius of less than 20km for all customers</p>
        <p>For orders under 10,000,000 VND, the sales staff will discuss and quote the shipping fee for each of your orders.</p>
        <p><b>DELIVERY SERVICE</b></p>
        <p>Delivery within 24 hours of the sales staff placing your order for all available products.</p>
        <p>Delivery within 7-10 working days for all products ordered according to customer requirements.
          Depending on each case, delivery time may be faster or slower. The sales staff will report this issue to you immediately upon confirmation of the order.</p>
        <p>Free installation for all your orders.</p>
        <p>For further details, please contact:</p>
        <p><b>Hotline: 0919.715.111</b></p>

    </div>

  )
}

export default DeliveryServices
