import React from 'react'
import "./CtryDrop.css"
function CtryDrop({ countryList,changeCtry }) {
    return (
        <div className='setWidthDrop'>
            <div className='row'>

                {countryList.map(list => {
                    return (
                        <div className='col-lg-4' key={list.id} onClick={()=>changeCtry(list)}>
                            <span className='alignFlag'>
                                <img src={list.img} alt={list.ctry} className="flagWidth pr-2"></img>
                            </span>
                            <span>{list.ctry}</span>
                        </div>
                    )
                })}


            </div>
        </div>

    )
}

export default CtryDrop
