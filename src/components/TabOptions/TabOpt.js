import React from 'react'
import './TabOpt.css'
const tabs = [
  {
    id: 1,
    delivery: "Delivery",
    activeImg: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
    backdrop: "#FCEEC0",
    ina_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"

  },
  {
    id: 2,
    delivery: "Dining Out",
    activeImg: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "#E5F3F3",
    ina_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"

  },
  {
    id: 3,
    delivery: "Nightlife",
    activeImg: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop: "#FCEEC0",
    ina_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"

  }
]
function TabOpt({ activeTab, setActiveTab }) {
  return (
    <div className='tabOptions setAlign'>
      <div className=' d-flex ' style= {{marginLeft:'10rem'}}>
        {tabs.map(tab => {
          return (
            <div key={tab.id} onClick={() => setActiveTab(tab.delivery)}
              className={`tabItem cursorPointer  mx-2 pb-4
              ${activeTab === tab.delivery && 'actTab'}`}>

              <span className='tabImgContainer absoluteCenter'
                style={{ backgroundColor: `${activeTab === tab.delivery ? tab.backdrop : ''}` }}>
                {/* Apply backdrop color only if tab is act */}

                <img className='tabImage' alt={tab.delivery} src={activeTab === tab.delivery ? tab.activeImg : tab.ina_img}></img>


              </span>



              <div className={`tabName ${activeTab==tab.delivery && 'setFontRed'}`} >{tab.delivery}</div>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default TabOpt
