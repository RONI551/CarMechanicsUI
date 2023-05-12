import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageService = () => {
    const [ services, setServices]= useState([])
    useEffect(()=>{
        fetch('https://protected-mesa-04774.herokuapp.com/services/')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    const handledelete = id =>{
        const url = `https://protected-mesa-04774.herokuapp.com/services/${id}`
        fetch(url,{
            method:'delete'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.deletedCount){
            const remaining = services.filter(service=>service._id!==id)
            setServices(remaining)
            alert('delete done')
           }
        })
    }

    return (
        <div>
           {
            services.map(service=><div key={service._id} >
                <h3>{service.name}</h3>
                <button onClick={()=>handledelete(service._id)}>Delete</button>
                
                </div>)
           }
        </div>
    );
};

export default ManageService;