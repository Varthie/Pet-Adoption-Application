import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link} from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from './AdminHeader';
function BuyList()
{
    const [values,setValue]=useState([])
    // const username=localStorage.getItem('username')
    useEffect(()=>{
        axios.get('http://localhost:5000/saleList')
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
    },[])
    return(
        <div>
            <AdminHeader/>
            <h3 className='text-center'>PET BUY LIST</h3>
            <div className="table-response">
                <table className='table table-hover table-striped table-secondary' >
                    <thead>
                        <tr>
                        <th>id</th>
                            <th>Category</th>
                            <th>Breet</th>
                            <th>Weight</th>
                            <th>Height</th>
                            <th>Age</th>
                            <th>Color</th>
                            <th>Cost</th>
                            <th>Image</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            values.map((data,i) => (
                                <tr id={i}>
                                     <td>{data.id}</td>
                                    <td>{data.cat}</td>
                                    <td>{data.breed}</td>
                                    <td>{data.we}</td>
                                    <td>{data.he}</td>
                                    <td>{data.age}</td>
                                    <td>{data.color}</td>
                                    <td>{data.cost}</td>
                                   
                                    <td>
                                        <img width={150} src={`http://localhost:5000/uploads/${data.img}`} alt="" />
                                    </td>
                                    {/* <td>
                                        <Link to={`/Delete1/${data.id}`}>
                                        <FontAwesomeIcon icon={faTrashCan} beatFade></FontAwesomeIcon>
                                        
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/Update/${data.id}`}>
                                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                                        
                                        </Link>
                                    </td> */}
                                    
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default BuyList