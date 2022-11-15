import React from 'react';
import Apoinment from '../Apoinment/Apoinment';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Testmonial from '../Testmonial/Testmonial';
import Connected from './Connected/Connected';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DentalCare></DentalCare>
            <Apoinment></Apoinment>
            <Testmonial></Testmonial>
            <Connected></Connected>

        </div>
    );
};

export default Home;