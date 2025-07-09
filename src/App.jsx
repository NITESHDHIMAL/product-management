import { useState } from 'react'
import './App.css'
import AddProduct from './components/AddProduct'
import Product from './components/Product'

function App() {


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

  console.log("initial product",initialProduct)
  
  const [ products, setProducts ] = useState(initialProduct)


  const dataFromLocalStorage =  JSON.parse(localStorage.getItem('products'));
  console.log("dataFromLocalStorage", dataFromLocalStorage)

  const handleProductAdd = (singleData) => {

    const updatedData = [...products, singleData]
    setProducts(updatedData);
    // console.log("this is updated data",updatedData)
    localStorage.setItem('products', JSON.stringify(updatedData)); 
  } 

  const handleDelete = () => {
    localStorage.clear()
    location.reload()
  }


  return (
    <>

      <AddProduct productAdd={handleProductAdd} />

      <button onClick={handleDelete}>Delete All Product</button>

      {/* {product?.map((data) => (
        <div>
          name:{data?.name}
          description:{data?.description}
          price:{data?.price}
          image:{data?.image}
          <hr />
        </div>
      ))} */}

      {/* <Product parentdata={products}/> */}
      <Product parentdata={dataFromLocalStorage}/>


    </>
  )
}

export default App
