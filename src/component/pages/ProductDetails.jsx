import React from "react";
import styles from "../pages/productDetails.module.css"
import Offer from "../offers/Offer";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const ProductDetails = () => {
    return(
        <>
            <div className={styles.main_conatiner}>
                <div>
                    <Offer/>
                </div>
                <div>
                    <NavBar/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;