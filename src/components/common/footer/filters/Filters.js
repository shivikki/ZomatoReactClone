import React from 'react'
import './Filters.css'
import FilterItem from './FiterItem/FilterItem'


function Filters({ filterList }) {
  return (
    <div className='filter'>
      {/* filterList && means map the list only if its not empty to avoid error */}
      {filterList && filterList.map(filter => {
        return (
          <FilterItem key={filter.id} filter={filter}>
            {filter.title}
          </FilterItem>
        )

      })}
    </div>
  )
}

export default Filters
