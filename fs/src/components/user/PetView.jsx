import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link,useParams,useNavigate} from "react-router-dom";

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import UserHeader from './UserHeader';
function PetView()
{
    const [values,setValue]=useState([])
    const {id} = useParams();
    const uuid=localStorage.getItem('uid')
    useEffect(()=>{
        axios.get('http://localhost:5000/checkId/'+id)
        .then(res =>{
            setValue(res.data)
            console.log(values[0])
        })
        .catch(err=>
            console.log("Error:"+err))
    },[])
    const navigate=useNavigate();
    function buyPet(){
        const cat=values[0].cat;
        const breed=values[0].breed;
        const we=values[0].we;
        const he=values[0].he;
        const age=values[0].age;
        const color=values[0].color;
        const cost=values[0].cost;
        const img=values[0].img;
        const pid=values[0].id;
        const uid=uuid;
        
        axios.post('http://localhost:5000/buyPet',{cat,breed,we,he,age,color,cost,img,uid,pid})
            .then(res=>{
            console.log(res)
            navigate('/Payment')

            })
            .catch(err=>console.log(err))
    }
    return(
        <div>
              <UserHeader/>
            <div className="container">
            {
                values.map((data,i) => (
                <div className="row">
               
                    <div className="col-lg-6" id={i}>

  <img src={`http://localhost:5000/uploads/${data.img}`}  alt="..."/>
  
</div>
<div className="col-lg-6">
    <div className="row">
    <div className="col-lg-4  mt-4">Category Name</div>
    <div className="col-lg-8 fw-bold mt-4">{data.cat}</div>
    <div className="col-lg-4 mt-4">Bread Name</div>
    <div className="col-lg-8 fw-bold mt-4">{data.name}</div>
    <div className="col-lg-4 mt-4">Weight</div>
    <div className="col-lg-8 fw-bold mt-4">{data.we}</div>
    <div className="col-lg-4 mt-4">Height</div>
    <div className="col-lg-8 fw-bold mt-4">{data.he}</div>
    <div className="col-lg-4 mt-4">Age</div>
    <div className="col-lg-8 fw-bold mt-4">{data.age}</div>
    <div className="col-lg-4 mt-4">Color</div>
    <div className="col-lg-8 fw-bold mt-4">{data.color}</div>
    <div className="col-lg-4 mt-4">Cost</div>
    <div className="col-lg-8 fw-bold mt-4">{data.cost}</div>
    <div className="col-lg-4 mt-4">Status</div>
    <div className="col-lg-8 fw-bold mt-4">{data.st}</div>
    <div className="col-lg-4 mt-4"></div>
    <div className="col-lg-8 fw-bold mt-4">
        <input type="button" className="btn btn-success" onClick={buyPet} value="Buy"/>
    </div>
    
    </div>
</div>
                    
                
                </div>
                ))
            }
            </div>
            
            
        </div>
    )
}
export default PetView