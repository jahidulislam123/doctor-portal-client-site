import React, { useState } from 'react';
import Footer from '../Home/Shared/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appoinment = () => {
    const [date ,setDate ]=useState(new Date());

    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;