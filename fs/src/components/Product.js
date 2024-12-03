import React , {useState} from 'react';
import Productdetails from './Productdetails'
import '../components/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({pro}) {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    const handleClick =() =>
    {
        const update = [...cart, pro];
        setCart(update)
        localStorage.setItem('cart', JSON.stringify(update));
        navigate('/cart')
    }
   
    const [Product, setProduct] = useState(Productdetails)
   const filterrproduct = (Product) =>
   {
    const update = Productdetails.filter((x) =>
    {
       return x.cat === Product;
    })
    setProduct(update)
   }
   
    return(
        <>
      
        <div className='products'>
        <h2># Products</h2>
        <p>Home . Products</p>
            <div className='containe3'>
                <div className='filler'>
                    <div className='categories'>
                        <h3>Categories</h3>
                        <ul>
                            <li onClick={() => filterrproduct("Food")}>Food</li>
                            <li onClick={() => filterrproduct("Medicine")}>Medicine</li>
                            <li onClick={() => filterrproduct("Necessities")}>Necessities</li>
                        </ul>
                    </div>
                </div>
                <div className='productbox'>
                    <div className='contain'>
                        {
                            Product.map((curElm) =>
                            {
                                return(
                                    <>
                                     <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.img} alt={curElm.Title}></img>
                                    </div>
                                    <div className='detail'>
                                        <p> {curElm.cat}</p>
                                        <h4>{curElm.Title}</h4>
                                        <h5>{curElm.Price}</h5>
                                     <button onClick={handleClick}>Add to cart</button>
                                    </div>
                                </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product