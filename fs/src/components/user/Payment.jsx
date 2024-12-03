import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useParams,useNavigate} from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import UserHeader from './UserHeader';
function Payment()
{
    const navigate=useNavigate();
    const [values,setValue]=useState([])
    const {id} = useParams();
    const uuid=localStorage.getItem('uid')
    function paid(){
        alert("Money Paid Successfully")
        navigate('/PurchaseList')
    }
    
    return(
        <div>
   <UserHeader/>
<div className="container">
    <div className="row">
<div className="col-lg-6">
    <form onSubmit={paid}>
        Card Number
        <input type="text" className="form-control mb-2" required/>
        Card Holder Name
        <input type="text" className="form-control mb-2" required />
        Expiry Month
        <select className="form-select mb-2">
        <option>JAN</option>
        <option>FEB</option>
        <option>MAR</option>
        <option>APR</option>
        <option>MAY</option>
        <option>JUN</option>
        <option>JUL</option>
        <option>AUG</option>
        <option>SEP</option>
        <option>OCT</option>
        <option>NOV</option>
        <option>DEC</option>
            
        </select>
        Expiry Year
        <select className="form-select mb-2">
        <option>2025</option>
        <option>2026</option>
        <option>2027</option>
        <option>2028</option>
        <option>2029</option>
        <option>2030</option>
       
        </select>
        Pin Number
        <input type="text" required className="form-control mb-2" />
    
 
        <input type="submit" className="btn btn-success" value="Payment"/>
        </form>
   
</div>
<div className="col-lg-6">
<img src="pay.jpg" className='img-fluid' alt="" />
</div>
</div>
</div>
                    
                
               
        </div>
    )
}
export default Payment