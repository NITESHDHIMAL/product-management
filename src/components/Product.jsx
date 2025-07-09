import React from 'react'

// const Product = (props) => {
const Product = (parentdata) => {

    console.log("all parent data", parentdata)

    return (
        <>
            {parentdata?.parentdata?.map((data) => (
            <div>
                name:{data?.name}
                description:{data?.description}
                image:{data?.image}
                price:{data?.price}
            </div>
            ))}

        </>
    )
}

export default Product