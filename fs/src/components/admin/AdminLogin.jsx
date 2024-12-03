import React from 'react'
import {useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../header';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function AdminLogin() {
  
  const[uname,setUname]=useState('')
  const[psword,setPsword]=useState('')
  const navigate=useNavigate();
  function handleSubmit(event){
    event.preventDefault()
    if(uname==="admin" && psword==="admin")
    {
        navigate('/PetDisplay')
    }
    else
    alert("Login Failed")
      
     

    }

  return (
    <div>
      <Header/>
      <div class="container">
        <div className="row">
        <div className="col-lg-6">
          <img src="2.png" className='img-fluid' alt="" />
        </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <h3 class="text-center">Admin Login</h3>
                User Name
                <input type="text" class="form-control mb-3 shadow-none form-control-lg" placeholder='Username' onChange={e=>setUname(e.target.value)}/>
               Password
                <input type="password"  class="form-control mb-3 shadow-none form-control-lg"placeholder='Password'onChange={e=>setPsword(e.target.value)}/>
                <input type="submit" class="btn btn-success mt-3 btn-lg" value="Login" />
                
                </form>
            </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

  <div className="text-white mb-3 mb-md-0">
    Copyright © 2024. All rights reserved.
  </div>
  
  </div>
    </div>

  )
}

export default AdminLogin 