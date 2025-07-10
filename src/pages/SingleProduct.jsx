import React from 'react'
import { useParams } from 'react-router';

const SingleProduct = () => {

    const {id} = useParams()  
    const product = JSON.parse(localStorage.getItem("products"));  
    const singleProduct = product[id]

    return (
        <> 
            <h1>single product</h1> 
            <h1>{singleProduct?.name}</h1>
            <p>{singleProduct?.description}</p>
            <img src={singleProduct?.image} alt="" width={200} />
            <span>{singleProduct?.price}</span> 
        </>
    )
}

export default SingleProduct