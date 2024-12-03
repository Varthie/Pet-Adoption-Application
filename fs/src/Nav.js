import React from 'react';
import { IoCard } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { RiUser5Line } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './Nav.css';
import PawPal from './components/images/PawPal.png';

function Nav({size}) {

   const { loginWithRedirect, logout , user, isAuthenticated} = useAuth0();
   return (
      <>
         <div className='free'>
            <div className='icon'>
               <IoCard />
            </div>

            <p>FREE pet toy when shopping upto ₹5000</p>
         </div>

         <div className='main_header'>
            <div className='cntainer'>
               <div className='logo'>
                  <div className='col-md-4'>
                  <img src={PawPal} alt='logo'></img>
                  </div>
               </div>
              
               <div className='icon'>
                  {
                     isAuthenticated &&
                     (
                        <div className='account'>
                        <div className='user_icon'>
                           <RiUser5Line />
                        </div>
                        <p>Hello, {user.name}</p>
                     </div>
                     )
                  }
                
                  <div className='second_icon'>
                
                     <Link to='/cart' className='link'><LuShoppingBag /></Link>
                     <span>{size}</span>
                  </div>
               </div>
            </div>
         </div>
         <div className='header'>
            <div className='cntainer'>
               <div className='nav'>
               <ul>
                  <li>
                     <Link to='/' className='link'>Home</Link>
                  </li>
                  <li>
                     <Link to='/product' className='link'>Products</Link>
                  </li>
                  <li>
                     <Link to='/breed' className='link'>Breed</Link>
                  </li>
                  <li>
                     <Link to='/about' className='link'>About</Link>
                  </li>
                  <li>
                     <Link to='/contact' className='link'>Contact</Link>
                  </li>
               </ul>
               </div>
               <div className='auth'>
                  {
                     isAuthenticated ?
                     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <FiLogOut/></button>
                     :
                     <button onClick={() => loginWithRedirect()}><FiLogIn/></button>
                  }
                 
                  
               </div>
            </div>
         </div>
      </>
   );
}
export default Nav;
