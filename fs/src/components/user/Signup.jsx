import React from 'react';
import {useState} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import axios, { formToJSON } from 'axios';
// import Menu from './Menu';
// import image from './Images/';
import Header from '../header';


function Signup() {
  const [name,setName]=useState('')
  const[cNo,setCNo]=useState('')
  const[email,setEmail]=useState('')
  const[uname,setUname]=useState('')
  const[psword,setPsword]=useState('')
  const navigate=useNavigate();
  function handleSubmit(event){
    event.preventDefault()
    axios.post('http://localhost:5000/SignUp',{name,cNo,email,uname,psword})
    .then(res=>{
      console.log(res)
      alert("Register Successfully")
      navigate('/UserLogin')

    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
     <Header/>
        <div className="container-fluid img">
          <form onSubmit={handleSubmit} >
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-center text-dark txt">Registration Form</h3>
              <div className="row ">
                <div className="col-lg-3 mt-3 text-dark txt">Name</div>
                <div className="col-lg-9">
                  <input type="text" className="form-control shadow-none mt-3 "  onChange={e=>setName(e.target.value)} required/>
                </div>
                <div className="col-lg-3 mt-3 text-dark txt">Contact No</div>
                <div className="col-lg-9">
                  <input type="text" className="form-control mt-3 shadow-none" onChange={e=>setCNo(e.target.value)} required />
                </div>
                <div className="col-lg-3 mt-3 text-dark txt">Email</div>
                <div className="col-lg-9">
                  <input type="text" className="form-control mt-3 shadow-none" onChange={e=>setEmail(e.target.value)} required  />
                </div>
                <div className="col-lg-3 mt-3 text-dark txt">Username</div>
                <div className="col-lg-9">
                  <input type="text" className="form-control mt-3 shadow-none" onChange={e=>setUname(e.target.value)} required  />
                </div>
                <div className="col-lg-3 mt-3 text-dark txt">Password</div>
                <div className="col-lg-9">
                  <input type="password" className=" form-control mt-3 shadow-none" onChange={e=>setPsword(e.target.value)} required/>
                </div>
                <div className="col-lg-5"></div>
                <div className="col-lg-3">
                  <input type="Submit" className="btn btn-success  mt-4  shadow-none" value="Submit"  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <img src="3.jpg" className='img-fluid' alt="" />
            </div>
          </div></form>
        </div>
    </div>
  )
}

export default Signup