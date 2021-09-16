import React from "react";
import Banner from "../components/Banner";
import Shop from "../components/Shop/Shop";
import HallOfFrame from "../components/HallOfFrame/HallOfFrame";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <HallOfFrame />
            <Shop />
        </div>
    )
}

export default HomePage;