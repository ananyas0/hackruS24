import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'

const App = () => {

  return (
    <>
    <div className='app'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element ={<Cart/>} />
        <Route path='/Order' element ={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
