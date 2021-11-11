import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import ProductSection from '../ProductSection/ProductSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ProductSection></ProductSection>
        </div>
    );
};

export default Home;