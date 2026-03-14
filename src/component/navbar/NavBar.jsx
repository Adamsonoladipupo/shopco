import React from "react";
import styles from '../navbar/navbar.module.css'
import images from "../../assets/images";
import { Cart, Hamburger, Profile, Search } from "../../assets/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../menu/menu";

const NavBar = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.mobile_menu}>
                    {isMenuOpen && (
                        <Menu/>
                    )}
                </div>
                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <span className={styles.hamburger_icon} onClick={toggleMenu}><Hamburger/></span>
                        <img src={images.logo} alt="" />
                    </div>
                    <div className={styles.nav_links}>
                        <Menu/>
                    </div>
                    <div className={styles.nav_icons}>
                        <span className={styles.search_input}>
                            <span><Search/></span>
                            <input type="text" placeholder="Search for products..."/>
                        </span>
                        <div>
                            <Cart/>
                            <Profile/>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar