import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import EditPrdoduct from './pages/EditPrdoduct'

function App() {  
  return (
    <>  
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/:id' element={<SingleProduct/>} /> 
      <Route path='/edit/:id' element={<EditPrdoduct/>} /> 
    </Routes> 
    </>
  )
}

export default App
