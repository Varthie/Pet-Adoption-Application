import React , {useState, useEffect}from "react";
import axios from "axios";
import { Route, useNavigate,useParams } from "react-router-dom";


function PetDelete() {
   const {id} = useParams();
   const navigate=useNavigate();
   useEffect(()=>{
    axios.delete("http://localhost:5000/petDelete/"+id)
    .then (res =>{
        console.log("Result1: " +res.data)
        navigate('/PetDisplay')
    })
    .catch(err =>
        console.log("Error: "+err))
   })

return (
    <div></div>
)
}
export default PetDelete;