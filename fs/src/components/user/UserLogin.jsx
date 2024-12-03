import React from 'react'
import {useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";
import Header from '../header';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
function UserLogin() {
  const [values,setValue]=useState([])
  const[uname,setUname]=useState('')
  const[psword,setPsword]=useState('')
  const navigate=useNavigate();
  function handleSubmit(event){
    event.preventDefault()
    axios.post('http://localhost:5000/UserLogin',{uname,psword})
    .then(res=>{
      // console.log(res.data[0].id)
      console.log(res)
      
      if(res.data==='Failed')
      {

      }
      
    else
    {
      setValue(res.data)
      console.log(res.data[0].id)
      localStorage.setItem('uid', res.data[0].id);

      navigate('/PetShow')
    }
    
      
     

    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <Header/>
      <div class="container">
        <div className="row">
        <div className="col-lg-6">
          <img src="1.jpg" className='img-fluid' alt="" />
        </div>
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <h3 class="text-center">Login</h3>
                User Name
                <input type="text" class="form-control mb-3 shadow-none form-control-lg" placeholder='Username' onChange={e=>setUname(e.target.value)}/>
               Password
                <input type="password"  class="form-control mb-3 shadow-none form-control-lg"placeholder='Password'onChange={e=>setPsword(e.target.value)}/>
                <input type="submit" class="btn btn-success mt-3 btn-lg" value="Login" />
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account?<Link  to={`/Signup`}  className="link-danger">Register</Link> </p>
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

export default UserLogin 