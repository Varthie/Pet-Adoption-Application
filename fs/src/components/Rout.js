import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home'
import Product from '../components/Product'
import Contact from '../components/Contact';
import Breeds from '../components/Breeds'
import About from '../components/About'
import Cart from '../components/Cart'
function Rout({cart, setCart}) {
    const [detail, view] = useState()
    return(
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product detail={detail} view={view}/>} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/breed' element={<Breeds/>} />
            <Route path='/about' element={<About/>} />
        </Routes>
        </>
    )
} 

export default Rout