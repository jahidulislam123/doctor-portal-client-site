import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title font-bold text-secondary">{name}</h2>
    <p>{
        slots.length>0
        ? <span>{slots[0]}</span>
        : <span className='text-red-500'>No Slots Available.Try another day..</span>
        }</p>
    <p>{slots.length} {slots.length>1? 'spaces':'space'} available</p>
    <div class="card-actions justify-center">
      {/* <button 
     
       class=""></button> */}
       <label for="bookng-modal" 
        onClick={()=>setTreatment(service)}
        disabled={slots.length===0}
       class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appoinment</label>
    </div>
  </div>
</div>
    );
};

export default Service;