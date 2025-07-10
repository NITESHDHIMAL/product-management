import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const EditPrdoduct = () => {

    const { id } = useParams();
    const nav = useNavigate();

    const [product, setProduct] = useState({name:'', description:'', image:'', price:''});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('products'));
        const selected = data[id]
        // console.log("edit data", selected)  
        if(selected) {
            setProduct(selected)  
        } else { 
            alert('product not found!');
            nav('/')
        } 
    }, [id, nav] )


    const handleSubmit = () => {
        const data = JSON.parse(localStorage.getItem('products')); 
        data[id] = product; 
        localStorage.setItem('products', JSON.stringify(data))
        alert('Data updated successfully!')
        nav('/') 
    }
 
    return (
        <>


            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" value={product?.name} onChange={(e) => setProduct({name:e.target.value})}  /> <br />
                <label htmlFor="">Description</label>
                <input type="text" value={product?.description} onChange={(e) => setProduct({description:e.target.value})}  /> <br />
                <label htmlFor="">Image</label>
                <input type="text" value={product?.image} onChange={(e) => setProduct({image:e.target.value})}  /> <br />
                <label htmlFor="">Price</label>
                <input type="text" value={product?.price} onChange={(e) => setProduct({price:e.target.value})}  /> <br />
 
            <button type='submit'>Update</button>
            </form>

        </>
    )
}

export default EditPrdoduct