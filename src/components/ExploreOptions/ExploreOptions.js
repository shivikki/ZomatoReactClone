import React, { useState } from 'react'
import DisplayOptions from './displayOptions/DisplayOptions'
import './ExploreOptions.css'
const optionsList = [
    {
        id: 1,
        heading: "Popular cuisines near me",
        list: [
            "Bakery food near me", "Beverages food near me", "Biryani food near me",
            "Burger food near me", "Chinese food near me", "Desserts food near me",
            "Italian food near me", "Mithai food near me", "Momos food near me",
            "Mughlai food near me", "North Indian food near me", "Pasta food near me",
            "Pizza food near me", "Rolls food near me", "Sandwich food near me",
            "Shake food near me",
            "Sichuan food near me", "South Indian food near me", "Street food near me", "Tea food near me"

        ],
        isAct: true

    },
    {
        id: 2,
        heading: "Popular restaurant types near me",
        list: ["Bakeries near meBars near me", "Beverage Shops near me", "Bhojanalya near me", "Cafés near me", "Casual Dining near me", "Clubs near me", "Dessert Parlors near me", "Dhabas near me", "Fine Dining near me", "Food Courts near me",
            "Food Trucks near me", "Kiosks near me",
            "Lounges near me", "Pubs near me", "Quick Bites near me", "Sweet Shops near me"],
        isAct: false
    },
    {
        id: 3,
        heading: "Top Restaurant Chains",
        list: ["Burger KingDunkin'", "Donuts", "KFC", "McDonald's", "Pizza Hut"],
        isAct: false
    }
];


function ExploreOptions() {

    //defining state to store the id for which
    const [exploreOptionsList, toogleFunc] = useState(optionsList)


    let setAccSelected = (index) => {


        console.log("inside acc selcted", index)
        let newArr =
            exploreOptionsList.map((lis, i) => {
                if (index === i) {
                    let arr = {
                        id: lis.id,
                        heading: lis.heading,
                        list: lis.list,
                        isAct: !lis.isAct
                    }
                    console.log(arr, "jhdcba jcsahsjacb jkacn ")
                    return arr;

                }
                else {
                    return lis;
                }
            }
            )

        toogleFunc(newArr)

    }


    return (
        <div className='setBg'>
            <div className='mt-2 maxWidth '>
                <br />
                <h2>Explore options near me</h2>
                {exploreOptionsList.map((item, index) => {
                    return (

                        <div key={item.id}>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className=" accBtn hideBorder" type="button" data-bs-toggle="collapses"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                            style={{ backgroundColor: "#ffffff" }}
                                            onClick={() => setAccSelected(index)}
                                        >
                                            <div>
                                                <span className="heading floatLeft">  {item.heading} </span>
                                                <span className={`floatRight dFlex ${item.isAct ? '' : 'transformArrow'}`}>
                                                    <img src="/image/arrow-up.png" alt="arrow"></img>
                                                </span>
                                            </div>

                                        </button>
                                    </h2>
                                    <div id="collapseOne" className={`accordion-collapse collapse  ${item.isAct ? 'show' : 'hide'} `} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <DisplayOptions ansList={item.list} />


                                        </div>
                                    </div>
                                </div>


                            </div>
                            <br /><br />
                        </div>
                    )

                })}
            </div >
        </div>
    )
}

export default ExploreOptions
