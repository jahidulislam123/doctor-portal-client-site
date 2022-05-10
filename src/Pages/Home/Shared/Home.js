import React from 'react';
import Bnner from '../Bnner';
import Info from '../Info';
import Services from '../Services';
const Home = () => {
    return (
        <div className='px-12'>
            <Bnner></Bnner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;