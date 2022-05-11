import React from 'react';
import Banner2 from '../Banner2';
import Bnner from '../Bnner';
import Info from '../Info';
import MakeAppointment from '../MakeAppointment';
import Services from '../Services';
import Testomonials from '../Testomonials';
const Home = () => {
    return (
        <div className='px-12'>
            <Bnner></Bnner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <MakeAppointment></MakeAppointment>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;