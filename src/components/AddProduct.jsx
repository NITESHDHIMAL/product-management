import React, { useState } from 'react'

const AddProduct = (props) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')


    function handleSubmitForm (e) { 
        e.preventDefault()
        let singleData = { name, description, price, image }
        // console.log("single data",singleData)  
        if(name.length<1 || description.length<1 || price.length<1 || image.length<1 ) {
            alert('Please fill the form.')
        } else {
            props.productAdd(singleData); 
        } 

        console.log("this is product add",productAdd)
    } 

    return (
        <>

            <h1>Add product:</h1>
            <form onSubmit={handleSubmitForm} >
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value) } /> <br />

                <label htmlFor="">Description</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value) } /> <br />

                <label htmlFor="">Price</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value) } /> <br />

                <label htmlFor="">Image</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value) } /> <br />

                <br />
                <button type='submit'>Submit</button>
            </form>

        </>
    )
}

export default AddProduct
 