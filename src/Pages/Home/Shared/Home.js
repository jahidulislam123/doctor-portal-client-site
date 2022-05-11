import React from 'react';
import Banner2 from '../Banner2';
import Bnner from '../Bnner';
import Info from '../Info';
import MakeAppointment from '../MakeAppointment';
import Services from '../Services';
import Testomonials from '../Testomonials';
import TextInput from '../TextInput';
import Footer from './Footer';
const Home = () => {
    return (
        <div>
            <Bnner></Bnner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <MakeAppointment></MakeAppointment>
            <Testomonials></Testomonials>
            <TextInput></TextInput>
            <Footer></Footer>

        </div>
    );
};

export default Home;