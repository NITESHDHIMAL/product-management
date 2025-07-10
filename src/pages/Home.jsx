import React, { useState } from 'react'
import AddProduct from '../components/AddProduct';
import Product from '../components/Product';
import { Link } from 'react-router';

const Home = () => {
  const initialProduct = [
    {
      name: 'realme',
      description: 'best phone',
      image: 'https://fatafatsewa.com/storage/media/4940/Realme-C35-Price-in-Nepal-2022.jpg',
      price: '120k',
    },
    {
      name: 'realme 2',
      description: 'best phone',
      image: 'https://fatafatsewa.com/storage/media/4940/Realme-C35-Price-in-Nepal-2022.jpg',
      price: '120k'
    },
    {
      name: 'realme 3',
      description: 'best phone',
      image: 'https://fatafatsewa.com/storage/media/4940/Realme-C35-Price-in-Nepal-2022.jpg',
      price: '120k'
    },
    {
      name: 'realme 4',
      description: 'best phone',
      image: 'https://fatafatsewa.com/storage/media/4940/Realme-C35-Price-in-Nepal-2022.jpg',
      price: '120k'
    },
  ]

  const [products, setProducts] = useState(initialProduct)
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('products'));
  console.log("dataFromLocalStorage", dataFromLocalStorage)

  // add product
  const handleProductAdd = (singleData) => {
    const updatedData = [...products, singleData]
    setProducts(updatedData);
    localStorage.setItem('products', JSON.stringify(updatedData));
  }

  // delete product 
  const handleDelete = () => {
    localStorage.clear()
    location.reload()
  }

  // delete single product 

  const handleDeleteSingleProduct = (i) => {
    const updatedData = [...dataFromLocalStorage]
    updatedData.splice(i,1)
    localStorage.setItem('products', JSON.stringify(updatedData));
    location.reload()
  }

  return (
    <>
      <AddProduct productAdd={handleProductAdd} />
      <button onClick={handleDelete}>Delete All Product</button>
      {/* <Product parentdata={dataFromLocalStorage} />  */}

      {dataFromLocalStorage?.map((data, i) => (
        <div key={i}>
          <Link to={`${i}`}> <h1>{data?.name}</h1></Link>
          <p>{data?.description}</p> <br />
          <img src={data?.image} alt={data?.name} width={200} />
          <span>{data?.price}</span>
          <hr />
          <button onClick={() => handleDeleteSingleProduct(i)}>Delete</button>
          <Link to={`/edit/${i}`} >Edit</Link>
        </div>
      ))} 
    </>
  )
}

export default Home