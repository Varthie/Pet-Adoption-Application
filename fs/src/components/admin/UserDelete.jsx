import React , {useState, useEffect}from "react";
import axios from "axios";
import { Route, useNavigate,useParams } from "react-router-dom";


function UserDelete() {
   const {id} = useParams();
   const navigate=useNavigate();
   useEffect(()=>{
    axios.delete("http://localhost:5000/userDelete/"+id)
    .then (res =>{
        console.log("Result1: " +res.data)
        navigate('/UserList')
    })
    .catch(err =>
        console.log("Error: "+err))
   })

return (
    <div></div>
)
}
export default UserDelete;