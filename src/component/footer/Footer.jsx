import React from "react";
import styles from '../footer/footer.module.css'
import images from "../../assets/images";
import {Facebook, Twitter, Instagram, Github } from "../../assets/icons";

const Footer = () =>{
    return(
        <>
            <div className={styles.news_letter}>
                <span>
                    <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </span>
                <div className={styles.news_letter_input}>
                        <input type="text" placeholder="Enter your email address"/>
                        <button>Subscribe to Newsletter</button>
                </div>
            </div>
            <div className={styles.main_container}>
                <div className={styles.mid_footer}>
                    <div className={styles.footer_column}>
                        <img src={images.logo} alt="" style={{width:'110px'}}/>
                        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className={styles.footer_icons}>
                            <span className={styles.icons}><Twitter/></span>
                            <span className={styles.icons}><Facebook/></span>
                            <span className={styles.icons}><Instagram/></span>
                            <span className={styles.icons}><Github/></span>
                        </div>
                    </div>
                    <div className={styles.footer_column}>
                        <ul>
                            COMPANY
                            <li><a href="#">About</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Works</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_column}>
                        <ul>
                            HELP
                            <li><a href="#">Customer Support</a></li>
                            <li><a href="#">Delivery Details</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_column}>
                        <ul>
                            FAQ
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Manage Deliveries</a></li>
                            <li><a href="#">Orders</a></li>
                            <li><a href="#">Payment</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_column}>
                        <ul>
                            RESOURCES
                            <li><a href="#">Free eBook</a></li>
                            <li><a href="#">Development Tutorial</a></li>
                            <li><a href="#">How to Blog</a></li>
                            <li><a href="#">Youtube Playlist</a></li>
                        </ul>
                    </div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.bottom_footer}>
                    <p>Shop.co &copy; 2000-{new Date().getFullYear()}, All Rights Reserved</p>
                    <div className={styles.payment_options}>
                        <img src={images.visa} alt="visa" />
                        <img src={images.masterCard} alt="masterCard" />
                        <img src={images.paypal} alt="paypal" />
                        <img src={images.applyPay} alt="applyPay" />
                        <img src={images.googlePay} alt="googlePay" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer