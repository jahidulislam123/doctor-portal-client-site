import React from 'react';
import doctor from '../../assets/images/doctor.png'
import Appoinment from '../../assets/images/appointment.png'
import PrimaryButton from './Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${Appoinment})`
        }} className='flex justify-center my-4 rounded-lg  items-center px-7'>
            <div className='flex-1 hidden lg:block '>
            <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
            <h3 className='text-xl text-primary font-bold'>Appoinmenyt </h3>
            <h2 className='text-3xl text-white'>Make an Appoinment Today </h2>
            <p className='text-white mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias possimus libero quis laborum eius eum tenetur dolorum autem voluptatem, praesentium suscipit! Quia, ullam soluta numquam sed labore accusamus a quaerat!</p>
            <PrimaryButton >Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;