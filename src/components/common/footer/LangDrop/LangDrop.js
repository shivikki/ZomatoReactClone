import React from 'react'
import "./LangDrop.css"
function LangDrop({langList,changeLang}) {
  return (
    <div >
      
      {langList.map((lang,index) =>{
        return(
           <div key={index} onClick={()=>changeLang(lang)}> {lang} </div>
        )
        
      })}
    </div>
  )
}

export default LangDrop
