import styles from "../newArrivals/newArrivals.module.css"
import images from "../../assets/images";
import {Star } from '../../assets/icons'
import { useGetAllProductsQuery } from "../../api/ProductAPI";
import { useState } from "react";


const NewArrivals = () => {
    const data = useGetAllProductsQuery()
    const [expand, setExpand] = useState(false);
    const changeView = () => setExpand(showed => !showed)
    console.log(changeView)

    return(
        <>
            <div className={styles.main_container}>
                <h2>NEW ARRIVALS</h2>
                <div className={styles.new_arrivals}>
                    {
                        data.data?.map((product) =>(
                            <div key={product.id} className={styles.arrival}>
                                <span className={styles.clothe_image} style={{backgroundImage:`URL(${product.image})`, backgroundSize:'cover', backgroundPosition:'center'}}></span>
                                <h3>{product.title}</h3>
                                <span><Star/><Star/><Star/><Star/>{product.rating.rate}</span>
                                <span className={styles.price}>${product.price}</span>
                            </div>
                        ))
                    }
                </div>

                <button onClick={changeView}>View All</button>
            </div>
        </>
    );
}
export default NewArrivals