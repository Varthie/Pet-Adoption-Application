import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { TiArrowRightOutline } from "react-icons/ti";
import pawppy from '../components/images/pup.jpg'
import food from '../components/images/treat.png'
import medicine from '../components/images/medicine.png'
import collar from '../components/images/collar.png'
import { FaTruck, FaHeadset } from 'react-icons/fa6';
import { FaRupeeSign } from 'react-icons/fa';
import { HiOutlineReceiptPercent } from 'react-icons/hi2';
import kitten from '../components/images/kit.png'
import Homepro from './Homepro.js';
import Breedsdetails from '../components/Breedsdetails.js'
import './Home.css'
import Header from './header';
function Home() {
    const navigate = useNavigate();

    const handleClick= () => {
        navigate('/product')
    }

    return (
        <>
<Header/>
            <div className='top_banner'>
                <div className='containe'>
                    <div className='detail'>
                        <h2>50% off on Puppy Foods</h2>
                        <Link to='product' className='link'>Shop Now <TiArrowRightOutline /></Link>
                    </div>
                    <div className='img_box'>
                        <img src={pawppy} alt='slidering'></img>
                    </div>
                </div>
            </div>
            <div className='product_type' >
                <div className='contain'>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={food} alt='Pet food' onClick={handleClick}></img>
                        </div>
                        <div className='detail'>
                            <p>20 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={medicine} alt='Pet Medicine' onClick={handleClick}></img>
                        </div>
                        <div className='detail'>
                            <p>15 products</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='img_box'>
                            <img src={collar} alt='Pet necessities' onClick={handleClick}></img>
                        </div>
                        <div className='detail'>
                            <p>25 products</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about'>
                <div className='container'>
                    <div className='box'>
                        <div className='icon'>
                            <FaTruck />
                        </div>
                        <div className='detail'>
                            <h3>Free shipping</h3>
                            <p>Order above ₹5000</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <FaRupeeSign />
                        </div>
                        <div className='detail'>
                            <h3>Return & Refund</h3>
                            <p>Money back guaranteed</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <HiOutlineReceiptPercent />
                        </div>
                        <div className='detail'>
                            <h3>Memeber discount</h3>
                            <p>On every Order</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon'>
                            <FaHeadset />
                        </div>
                        <div className='detail'>
                            <h3>Customer Support</h3>
                            <p>All time Service</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product'>
                <h2>Top Products</h2>
                <div className='contain'>

                    {
                        Homepro.map((currentElment) => {
                            return (

                                <div className='box' key={currentElment.id}>
                                    <div className='img_box'>
                                        <img src={currentElment.img} alt={currentElment.Title}></img>
                                    </div>
                                    <div className='detail'>
                                        <p> {currentElment.cat}</p>
                                        <h4>{currentElment.Title}</h4>
                                        <h5>{currentElment.Price}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
           <div className='banner'>
            <div className='contamination'>
            <div className='detail'>
                <h4>NEW PURR-FECT SAVINGS</h4>
                <h3>Perfect Cat box for your Naughty Cats</h3>
                <p>Starts only at ₹900</p>
                <Link to='product' className='link'>Shop now <TiArrowRightOutline /> </Link>
            </div>
            <div className='img_box'>
                <img src={kitten} alt='slidering'></img>
            </div>
           </div>
           </div>
           <div className='breeds'>
            <h2>Breeds</h2>
            <div className='coontain'>
                {
                    Breedsdetails.map((curElm) => 
                    {
                        return (
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.img} alt={curElm.Name}></img>
                                </div>
                                <div className='detail'>
                                     <h4>{curElm.Name}</h4>
                                     <p>{curElm.cate}</p>
                                     <h5>{curElm.Desc}</h5>
                                </div>
                            </div>
                        
                        )
                    })
                }
            </div>
           </div>
        </>
    )
}

export default Home;