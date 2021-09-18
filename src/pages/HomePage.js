import React from "react";
import Banner from "../components/Banner";
import Shop from "../components/Shop/Shop";
import HallOfFrame from "../components/HallOfFrame/HallOfFrame";
import BestSeller from "../components/BestSeller";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <HallOfFrame />
            <Shop />
            <BestSeller />
        </div>
    )
}

export default HomePage;