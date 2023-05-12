import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Adservice.css'
const Adservices = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
    
    console.log(data);
    axios.post('https://genius-car-mechanics-server.onrender.com/services',data)
    .then(res=>{
        console.log(res)
        if(res.data.insertedId){
            alert('added succesfully')
            reset()
        }
    })
}

    return (
        <div className='add-service'>
            <h1>add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='name'/>
      <input {...register("description")} placeholder="description" />
      <input type="number" {...register("price")} placeholder="number" />
      <input {...register("img")} placeholder='image-url' />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Adservices;