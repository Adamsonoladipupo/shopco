import React from "react";
import styles from '../menu/menu.module.css'
const Menu = () =>{
    return(
        <>
        <div className={styles.menu_container}>
            <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">On Sale</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Brands</a></li>
            </ul>
        </div>
        </>
    );
}

export default Menu;