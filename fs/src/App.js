import React, { useState } from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact';
import Breeds from './components/Breeds'
import About from './components/About'
import Cart from './components/Cart'
import FileUpload from './components/FileUpload'
import PetAdd from './components/admin/PetAdd'
import PetDisplay from './components/admin/PetDisplay'
import Signup from './components/user/Signup'
import UserLogin from './components/user/UserLogin'
import PetShow from './components/user/PetShow'
import PetView from './components/user/PetView'
import Payment from './components/user/Payment'
import PurchaseList from './components/user/PurchaseList'

import AdminLogin from './components/admin/AdminLogin'
import AvailableList from './components/admin/AvailableList'
import BuyList from './components/admin/BuyList'
import UserList from './components/admin/UserList'
import PetDelete from './components/admin/PetDelete'
import UserDelete from './components/admin/UserDelete'


function App({cart, setCart}) {
    const [detail, view] = useState()
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product detail={detail} view={view}/>} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/breed' element={<Breeds/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/FileUpload' element={<FileUpload/>} />
            <Route path='/PetAdd' element={<PetAdd/>} />
            <Route path='/PetDisplay' element={<PetDisplay/>} />
            
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/PetView/:id' element={<PetView/>} />
            <Route path='/PetShow' element={<PetShow/>} />
            
            <Route path='/UserLogin' element={<UserLogin/>} />
            <Route path='/Payment' element={<Payment/>} />
            <Route path='/PurchaseList' element={<PurchaseList/>} />
           
            <Route path='/AdminLogin' element={<AdminLogin/>} />
            <Route path='/AvailableList' element={<AvailableList/>} />
            <Route path='/BuyList' element={<BuyList/>} /> 
            <Route path='/UserList' element={<UserList/>} /> 
            <Route path='/PetDelete/:id' element={<PetDelete/>} />
            <Route path='/UserDelete/:id' element={<UserDelete/>} />
            
            
        </Routes>
        </BrowserRouter>
    )
} 
export default App;