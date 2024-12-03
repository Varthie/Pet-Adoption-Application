import React,{useEffect, useState} from "react";
import axios from'axios';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan,faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import AdminHeader from './AdminHeader';
function UserList()
{
    const [values,setValue]=useState([])
    // const username=localStorage.getItem('username')
    useEffect(()=>{
        axios.get('http://localhost:5000/userList')
        .then(res =>{
            setValue(res.data)
        })
        .catch(err=>
            console.log("Error:"+err))
    },[])
    return(
        <div>
            <AdminHeader/>
            <h3 className='text-center'>CUSTOMER LIST</h3>
            <div className="table-response">
                <table className='table table-hover table-striped table-secondary' >
                    <thead>
                        <tr>
                        <th>id</th>
                            <th>Name</th>
                            <th>E-Mail</th>
                            <th>Contact Number</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            values.map((data,i) => (
                                <tr id={i}>
                                     <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.cno}</td>
                                    
                                    <td>
                                        <Link to={`/UserDelete/${data.id}`}  className="faTrashCan">
                                        <FontAwesomeIcon icon={faTrashCan} beatFade></FontAwesomeIcon>
                                        
                                        </Link>
                                    </td>
                                    {/* <td>
                                        <Link to={`/Update/${data.id}`}>
                                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                                        
                                        </Link>
                                    </td>
                                     */}
                                    </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default UserList