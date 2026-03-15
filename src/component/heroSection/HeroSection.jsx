import styles from "../heroSection/heroSection.module.css"
import images from "../../assets/images";
import { Link } from "react-router";

const HeroSection = () => {
    return(
        <>
            <div className={styles.main_container}>
                <div className={styles.hero_left}>
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link to="/register"><button>Shop Now</button></Link>
                    <div className={styles.hero_analysis}>
                        <span>
                            <h2>200+</h2>
                            <p>International Brands</p>
                        </span>
                        <span>
                            <h2>2,000+</h2>
                            <p>High-Quality Products</p>
                        </span>
                        <span>
                            <h2>30,000+</h2>
                            <p>Happy Customers</p>
                        </span>
                    </div>
                </div>
                <div className={styles.hero_right}>
                    <img src={images.hero1} alt="" />
                </div>
                
            </div>
        </>
    );
}
export default HeroSection