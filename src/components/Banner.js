import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <div style={{position:"relative", left:"5%", padding:"0.5% 4% 4% 4%", width:"80%"}}>
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src="https://advantekpet.com/wp-content/uploads/2018/09/Advantek-You-Got-a-New-Pet-Now-What.jpg" alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.mwiah.com/-/media/assets/mwianimalhealth/images/insights-images/vet-client-education.jpg" alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://blog.ferplast.com/wp-content/uploads/2021/04/attractive-young-woman-caring-her-beautiful-dog-wh-S5CN5S9-1024x683.jpg" alt=""/>
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/91J-1GrCLfS._AC_SL1500_.jpg" alt=""/>
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://tractive.com/blog/wp-content/uploads/2018/04/header_image_bluetooth_vs_gps.jpg" alt=""/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://www.moshikids.com/wp-content/uploads/2020/09/best-pets-for-kids-1-1-1024x683.jpeg" alt=""/>
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    )
};

export default Banner;