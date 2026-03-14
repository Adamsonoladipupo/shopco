import React from "react";
import styles from "../happyCustomers/happyCustomer.module.css"
import { Star, Verified, ArrowLeft, ArrowRight } from "../../assets/icons";

const HappyCustomers = () => {
    return(
        <>
            <div className={styles.main_container}>
                <div className={styles.top_container}>
                    <h2>OUR HAPPY CUSTOMERS</h2>
                    <div style={{display:'flex', alignItems:'center', gap:'20px'}}>
                        <span><ArrowLeft/></span>
                        <span><ArrowRight/></span>
                    </div>
                </div>
                <div className={styles.customers}>
                    <div className={styles.customer}>
                        <span><Star/><Star/><Star/><Star/><Star/></span>
                        <span><h3>Sarah M. </h3><Verified/></span>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className={styles.customer}>
                        <span><Star/><Star/><Star/><Star/><Star/></span>
                        <span><h3>Alex K. </h3><Verified/></span>
                        <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                    </div>
                    <div className={styles.customer}>
                        <span><Star/><Star/><Star/><Star/><Star/></span>
                        <span><h3>James L. </h3><Verified/></span>
                        <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HappyCustomers;