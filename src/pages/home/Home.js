import React, { useState } from 'react'
import Footer from '../../components/common/footer/Footer'
import Delivery from '../../components/Delivery/Delivery'
import Dining from '../../components/Dining/Dining'
import Header from '../../components/header/Header'
import NightLife from '../../components/NightLife/NightLife'
import TabOpt from '../../components/TabOptions/TabOpt'

function Home() {

    //use useState to decide which page to load
    //activeTab is varibale
    //setActiveTab is function that will be called to change State
    //Delivery is initial default value of state
    const [activeTab, setActiveTab] = useState('Delivery')

    return (
        <div>
            <Header/>
            <TabOpt activeTab={activeTab} setActiveTab={setActiveTab}/>
            {/* Diff func load screen acc to tab select */}
            {getActiveTab(activeTab)}
            <br/><br/>
            <Footer />
        </div>

    )
}

const getActiveTab = (tab) => {
    console.log("tab selected",tab)
    switch (tab) {
        case "Delivery":
            return <Delivery/>

        case "Dining":
            return <Dining/>

        case "Night Life":
            return <NightLife/>

        default:
            return <Delivery/>
    }
}

export default Home
