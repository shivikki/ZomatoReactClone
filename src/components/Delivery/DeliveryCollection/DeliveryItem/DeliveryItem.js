import React from 'react'
import './DeliveryItem.css'

function DeliveryItem({ item }) {
  return (
    <div >
      <div className='delItemCov '>
        <img src={item.cover} alt={item.title} className="delItemImg imgSize"></img>

      </div>

      <div className='delItemTitle mt-2'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem
