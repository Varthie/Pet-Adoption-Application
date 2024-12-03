import React from "react";
import Breedsde from '../components/Breedsde.js'
import { useState } from "react";

import './Breeds.css'

function Breeds() {
  
    const [Breeds, setBreeds] = useState(Breedsde)
    const filterrbre = (Breeds) =>
        {
         const update = Breedsde.filter((x) =>
         {
            return x.cate === Breeds;
         })
         setBreeds(update)
        }
    return(
        <div>

<div className='breeds'>
            <h2>Breeds</h2>
            <div className='containe3'>
                <div className='filler'>
                    <div className='categories'>
                        <h3>Categories</h3>
                        <ul>
                            <li onClick={() => filterrbre("Cat")}>Cat</li>
                            <li onClick={() => filterrbre("Dog")}>Dog</li>
                        </ul>
                    </div>
                </div>
                </div>
            <div className='coontain'>
                {
                    Breeds.map((curElm) => 
                    {
                        return (
                            <div className='box' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.img} alt={curElm.Name} ></img>
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
        </div>
    )
}

export default Breeds