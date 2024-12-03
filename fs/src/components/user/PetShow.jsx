import React,{useEffect, useState} from "react";
import axios from'axios';

import {Link,useParams,useNavigate} from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import UserHeader from './UserHeader';
function PetShow()
{
    const [values,setValue]=useState([])
    // const username=localStorage.getItem('username')
    useEffect(()=>{
        axios.get('http://localhost:5000/petDisplay')
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
    },[])
    return(
        <div>
            <UserHeader/>
            <h3 className='text-center'>PET SHOW</h3>
            <div className="container">
                <div className="row">
                {
                values.map((data,i) => (
                    <div className="col-lg-3" id={i}>
<div class="card" >
  <img src={`http://localhost:5000/uploads/${data.img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{data.breed}</h5>
    <p class="card-text">{data.cost}</p>
    <Link to={`/PetView/${data.id}`}>View Details</Link>
   
  </div>
</div>
                    </div>
                ))
            }
                </div>
            </div>
            
            
        </div>
    )
}
export default PetShow