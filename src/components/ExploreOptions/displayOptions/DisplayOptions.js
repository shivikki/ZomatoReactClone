import React from 'react'
import './DisplayOptions.css'

function DisplayOptions({ ansList }) {
    console.log("Display options",ansList)
    return (
        <div>
            {ansList.map((it,index) => {
                return (
                    <a key={index} className=" links">{"* " + it + " "}</a>

                )
            })}
        </div>
    )
}

export default DisplayOptions
