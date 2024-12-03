import React, { useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
const PetAdd = () => {
    const [cat,setcat]=useState('')
    const [breed,setbreed]=useState('')
    const [we,setwe]=useState('')
    const [he,sethe]=useState('')
    const [age,setage]=useState('')
    const [color,setcolor]=useState('')
    const [cost,setcost]=useState('')
    const [img,setimg]=useState('')

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data.message);
            setimg(response.data.message)
            const img1=response.data.message
            const st="Available"
            // alert(img)
            axios.post('http://localhost:5000/petSave',{cat,breed,we,he,age,color,cost,img1,st})
            .then(res=>{
            console.log(res)
            // navigate('/Login')

            })
            .catch(err=>console.log(err))
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <AdminHeader/>
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-6">
                    <h3 className='text-center'>ADD PET</h3>
                    <form  onSubmit={handleSubmit}>
                        <div className="row">
                        
                        <div className="col-lg-4 mt-2">
                                Category
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setcat(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Breed
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setbreed(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Weight
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setwe(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Height
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>sethe(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Age
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setage(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Color
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setcolor(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Cost
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="text" className='form-control'  onChange={e=>setcost(e.target.value)} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                Image
                            </div>
                            <div className="col-lg-8 mt-2">
<input type="file" className='form-control' onChange={handleFileChange} required/>
                            </div>
                            <div className="col-lg-4 mt-2">
                                
                            </div>
                            <div className="col-lg-8 mt-2">
                            <button className='btn btn-success' type="submit">Save</button>
                            </div>
                            
                        </div>
                        </form>
                    </div>
                    <div className="col-lg-6">
                    <img src="4.jpg" className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default PetAdd;