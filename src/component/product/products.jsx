import React from "react";
import { useGetAllProductsQuery } from "../../api/ProductAPI";

const Products = () =>{
    const data = useGetAllProductsQuery()
    console.log(data)


    return(
        <>
            <div>
                {
                    data.data?.map((product) =>(
                        <div key={product.id}>
                            <img src={product.image} alt="" />
                            <span src={product.title}></span>
                            <span src={product.rate}></span>
                            <span>{product.description}</span>
                            
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Products