import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useParams} from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';

function Header()
{
   
    return(
        <div className="menu">
           
       <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src='/logo.png' height="70px" alt="" /> 
        <span style={{paddingInlineStart:30}}>Pet Shop</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
          <Link class="nav-link active" to={`/`}>Home</Link>
           
          </li>
          <li class="nav-item">
          <Link class="nav-link active" to={`/UserLogin`}>User</Link>
            
          </li>
          <li class="nav-item">
          <Link class="nav-link active" to={`/AdminLogin`}>Admin</Link>
           
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
        </div>
    )
}
export default Header