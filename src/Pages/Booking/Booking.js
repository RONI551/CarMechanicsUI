import React from 'react';
import { useEffect } from 'react';

const Booking = () => {
    useEffect(()=>{
        fetch(`https://genius-car-mechanics-server.onrender.com/services/62b01c18aebb85c9fee061e2`)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Booking;