import React from 'react';
import logo from '../components/images/peepal.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { SiYoutube } from 'react-icons/si'
import './Footer.css';

function Footer() {
    return (
        <>
        <div className='footer'>
            <div className='conton'>
                <div className='about'>
                    <div className='logo'>
                        <img src={ logo } alt='logo'></img>
                    </div>
                    <div className='detail'>
                        <p>We are a team of developers and designers who thrive for users best experience.</p>
                        <div className='icon'>
                            <li><FaFacebook/></li>
                            <li><FaInstagram/></li>
                            <li><FaSquareXTwitter/></li>
                            <li><SiYoutube/></li>
                        </div>
                    </div>
                </div>
                <div className='account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className='page'>
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer