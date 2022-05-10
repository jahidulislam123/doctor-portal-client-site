import React from 'react';
import Banner2 from '../Banner2';
import Bnner from '../Bnner';
import Info from '../Info';
import Services from '../Services';
const Home = () => {
    return (
        <div className='px-12'>
            <Bnner></Bnner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
        </div>
    );
};

export default Home;