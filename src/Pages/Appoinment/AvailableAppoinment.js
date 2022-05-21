import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from 'react-query';
import Loading from '../Home/Shared/Loading';

const AvailableAppoinment = ({date}) => {
    const formattedDate =format(date,'PP');
    // const [services,setServices]=useState([]);
    const [treatment,setTreatment]= useState(null);
    const {data:services,isLoading,refetch}= useQuery(['available',formattedDate],()=>
        fetch(`https://pure-thicket-30912.herokuapp.com/available?date=${formattedDate}`)
            .then(res=>res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }
    
    
    // useEffect(()=>{
    //     fetch(`https://pure-thicket-30912.herokuapp.com/available?date=${formattedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formattedDate])

    return (
        <div>
            <h3 className='text-xl text-secondary text-center my-12'>Available Appoinment on {format(date,'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                    services?.map(service=><Service
                        key={service._id}
                        service={service}
                        
                        setTreatment={setTreatment}
                        
                        ></Service>)
               }
            </div>
            {treatment && <BookingModal 
            date ={date}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;