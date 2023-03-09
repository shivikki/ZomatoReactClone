import React from 'react'
import DeliveryCards from './DeliveryCards/DeliveryCards'
import './ResturantDelivery.css'

const delRestList=[
    {
        id:1,
        title:"Veg Protein Soya Chaap Corner",
        subTitle:"North Indian, Rolls",
        rating:"3.7",
        price:"Rs 200 for one",
        orderPlaced:"250+ order placed from here recently",
        imgCover:"https://b.zmtcdn.com/data/pictures/2/20455892/a3131713b8a2bf6cf1383a311008dedc_o2_featured_v2.jpg"
    },
    {
        id:2,
        title:"Veg Protein Soya Chaap Corner",
        subTitle:"North Indian, Fast Food",
        rating:"4",
        price:"Rs 300 for one",
        orderPlaced:"350+ order placed from here recently",
        imgCover:"https://b.zmtcdn.com/data/pictures/1/2600081/e35c8b23400e7ca42aeff42972ca0f8f_o2_featured_v2.jpg"
    },
    {
        id:3,
        title:"The Lunar Stay",
        subTitle:"North Indian, Mughlai, Chinese, Salad, Kebab, Fast Food, Beverages",
        rating:"3.7",
        price:"Rs 200 for one",
        orderPlaced:"550+ order placed from here recently",
        imgCover:"https://b.zmtcdn.com/data/pictures/0/20472420/3dfba4890e6d5f3709e14e6eed07f337_o2_featured_v2.jpg"
    },
    {
        id:4,
        title:"Sagar Gaire Fast Food : Jhangirabad",
        subTitle:"Chinese, Sandwich, Fast Food, Pasta, Pizza, North Indian, South Indian, Beverages",
        rating:"4.2",
        price:"Rs 150 for one",
        orderPlaced:"540+ order placed from here recently",
        imgCover:"https://b.zmtcdn.com/data/pictures/chains/9/2600109/de57f90beda050df95b89bd239633e90_o2_featured_v2.jpg"
    },
    {
        id:5,
        title:"Da Pizzeria",
        subTitle:"Pizza, Fast Food",
        rating:"3.2",
        price:"Rs 200 for one",
        orderPlaced:"440+ order placed from here recently",
        imgCover:"https://b.zmtcdn.com/data/pictures/0/2600340/141fd0ff2db068532770e81ec7eb4961_o2_featured_v2.jpg"
    },
    {
        id:6,
        title:"Burger King",
        subTitle:"Burger, Fast Food, Beverages, Desserts",
        rating:"3.2",
        price:"Rs 400 for one",
        orderPlaced:"240+ order placed from here recently",
        imgCover:"https://b.zmtcdn.com/data/pictures/chains/2/18821752/1edc341a1cb0b7bd57c812b93e6ce333_o2_featured_v2.jpg"
    }
]
function ResturantDelivery() {
  return (
    <div>
     
      <DeliveryCards delRestList={delRestList}/>
    </div>
  )
}

export default ResturantDelivery
