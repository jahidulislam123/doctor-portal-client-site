import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Home/Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1kgHIutvL6hPmOX0xnV52Ucuwu0MgvnDhskGveHE6Up07pemE83Un3IiNTvCekqJAztZM48EgdkXcEEL2fmOnL00vBMavNwN');

const Payment = () => {
    const {id}=useParams();
    const url =`http://localhost:5000/booking/${id}`
    const {data:appoinment,isLoading}=useQuery(['booking',id],()=>fetch(url,{
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
    }}).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>

             
            <div class="card w-50 bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello ,{appoinment.patientName}</p>
            <h2 class="card-title">Pay For {appoinment.treatment}</h2>
            <p>Your appoinment : <span className='text-orange-700'>{appoinment.date}</span> at {appoinment.slot}</p>
            <p>Please Pay ${appoinment.price}</p>
  </div>
</div>
<div className='card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100'>
    <div className='card-body'>
    <Elements stripe={stripePromise}>
      <CheckoutForm appoinment={appoinment} />
    </Elements>
    </div>

</div>
</div>
       
    );
};

export default Payment;