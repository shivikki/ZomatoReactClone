import React from 'react'
import './FilterItem.css'
function FilterItem({ filter }) {
    return (
        <span className='filterItem '>
            <span> {filter.icon && filter.icon}  </span>
            {/* if icon present then only display image */}
            <span className='mx-3'>
                {filter.title}
            </span>
        </span>
    )
}

export default FilterItem
