import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);
    console.log(services)

    useEffect( ()=>{
        fetch('https://genius-car-mechanics-server.onrender.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])

    return (
        <div className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> Our Services</h1>
            <div className="services-container">
            {
                services.slice(0,3).map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;