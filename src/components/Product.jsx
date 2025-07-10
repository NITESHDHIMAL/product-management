import React from 'react' 
import { Link } from 'react-router' 
 
const Product = (parentdata) => { 
    return (
        <>
            {parentdata?.parentdata?.map((data,i) => (
                <div key={i}>
                   <Link to={`${i}`}> <h1>{data?.name}</h1></Link>
                    <p>{data?.description}</p> <br />
                    <img src={data?.image} alt={data?.name} width={200}/>
                    <span>{data?.price}</span>
                    <hr />
                </div>
            ))}

        </>
    )
}

export default Product