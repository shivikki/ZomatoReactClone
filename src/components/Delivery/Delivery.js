import React from 'react'
import Filters from '../common/footer/filters/Filters'
import ExploreOptions from '../ExploreOptions/ExploreOptions'
import ResturantDelivery from '../ResturantDelivery/ResturantDelivery'
import TopBrands from '../TopBrands/TopBrands'
import "./Delivery.css"
import DeliveryCollection from './DeliveryCollection/DeliveryCollection'

const deliveryFilter = [
  {
    id: 1,
    icon: <img src="/image/filter.png" height="16px" width="16px" alt="filter"></img>,
    title: 'Filters'
  },
  {
    id: 2,
    icon: <img src="/image/distance.png" height="16px" width="16px" alt="distance"></img>,
    title: 'Distance'
  },
  {
    id: 3,
    title: 'Rating 4.0 +'
  },
  {
    id: 4,
    title: 'Pubs & Bars'
  }

]
function Delivery() {
  return (
    <div className='my-2'>

      <div className='cursorPointer filterDiv ' >
        <br/>
        <Filters filterList={deliveryFilter} />
        <br/>
      </div>

      <div>
        <DeliveryCollection></DeliveryCollection>
        <TopBrands />
        <ResturantDelivery />
        
        <ExploreOptions />
      </div>

    </div>
  )
}

export default Delivery
