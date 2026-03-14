import React from "react";
import images from "../../assets/images";
import styles from '../ClothesBrands/clothesBrands.module.css'

const ClothesBrands = () => {
    return(
        <>
            <div className={styles.main_container}>
                <img src={images.versace} alt="versace" />
                <img src={images.zara} alt="zara" />
                <img src={images.gucci} alt="gucci" />
                <img src={images.prada} alt="prada" />
                <img src={images.calvin} alt="calvin" />
            </div>
        </>
    );
}
export default ClothesBrands