import React from 'react'
import "./DeliveryCards.css"
function DeliveryCards({ delRestList }) {
    return (
        <div className='maxWidth'>


            <div className='setGrid '>
                {delRestList && delRestList.map(list => {
                    return (



                        <div className="card itemStyle" style={{ width: "30rem", border: "none" }}>
                            <div className="card-body">
                                <div className='imgCover'>
                                    <img src={list.imgCover} alt={list.title} className="deliveryClass"></img>
                                </div>
                                <div className='mt-2'>
                                    <span className='cardTitle'>{list.title}</span>
                                    <div className='rating p-1' style={{ float: "right" }}>
                                        <div style={{width:"1.5rem"}}>{list.rating}</div>
                                        <div>
                                            <img src="image/star.png" alt="star" className='starRating'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-2 subText '>
                                    <div className='listTitle'>{list.subTitle}</div>
                                    <div className='listPrice' style={{ float: "right" }}>{list.price}</div>
                                </div>

                                <hr style={{ borderBottom: "1px solid #e8e8e8" }} />
                                <div className='orderPlace'>
                                    {list.orderPlaced}
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>

        </div>
    )
}

export default DeliveryCards
