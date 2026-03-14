import styles from "../topSelling/topSelling.module.css"
import images from "../../assets/images";
import {Star } from '../../assets/icons'


const TopSelling = () => {
    return(
        <>
            <div className={styles.main_container}>
                <h2>Top Selling</h2>
                <div className={styles.top_selling_container}>
                    <div className={styles.top_selling}>
                        <span className={styles.clothe_image} style={{backgroundImage:`URL(${images.clothe1})`, backgroundSize:'cover', backgroundPosition:'center'}}></span>
                        <h3>T-SHIRT WITH TAPE DETAILS</h3>
                        <span><Star/><Star/><Star/><Star/>4.5</span>
                        <span className={styles.price}>$120</span>
                    </div>
                </div>
                <button>View All</button>
            </div>
        </>
    );
}
export default TopSelling