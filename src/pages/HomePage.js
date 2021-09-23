import React from "react";
import Banner from "../components/Banner";
import Shop from "../components/Shop/Shop";
import HallOfFrame from "../components/HallOfFrame/HallOfFrame";
import BestSeller from "../components/BestSeller";
import NewArrival from "../components/NewArrival";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <HallOfFrame />
            <Shop />
            <BestSeller />
            <NewArrival />
        </div>
    )
}

export default HomePage;