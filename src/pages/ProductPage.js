import React from "react";
import BestSeller from "../components/BestSeller";
import Products from "../components/Products/Products";


const ProductPage=()=>{
    return (
        <div>
            <img src="https://www.global-pets.net/images/banner01.jpg" alt="" style={{width:"100%"}}/>
            <Products />
            <BestSeller />
        </div>
    )
};

export default ProductPage;