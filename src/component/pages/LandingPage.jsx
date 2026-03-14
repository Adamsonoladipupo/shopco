import React from "react";
import styles from "../pages/landingPage.module.css"
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Products from "../product/products";
import Offer from "../offers/Offer";
import HeroSection from "../heroSection/HeroSection";
import ClothesBrands from "../ClothesBrands/ClothesBrands";
import HappyCustomers from "../happyCustomers/HappyCustomers";
import NewArrivals from "../newArrivals/NewArrivals";
import TopSelling from "../topSelling/TopSelling";
import BrowseByStyle from "../browseByStyle/BrowseByStyle";


const LandingPage =() =>{
    return(
        <>
            <div>
                <Offer/>
            </div>
            <div>
                <NavBar/>
            </div>
            <div>
                <HeroSection/>
            </div>
            <div>
                <ClothesBrands/>
            </div>
            <div>
                <NewArrivals/>
            </div>
            <hr className={styles.hr}/>
            <div>
                <TopSelling/>
            </div>
            <div>
                <BrowseByStyle/>
            </div>
            {/* <div>
                <Products/>
            </div> */}
            <div>
                <HappyCustomers/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default LandingPage;