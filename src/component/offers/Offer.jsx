import React from "react";
import styles from '../offers/offer.module.css'
import { Link } from "react-router";


const Offer =() =>{
    return(
        <>
            <div className={styles.main_container}>
                <span><p>Sign up and get 20% off to your first order.<Link to="/register">Sign Up Now</Link></p></span>
            </div>
        </>
    );
}

export default Offer