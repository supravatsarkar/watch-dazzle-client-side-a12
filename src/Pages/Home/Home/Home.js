import { Divider } from '@mui/material';
import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ProductSection from '../ProductSection/ProductSection';
import ReviewSection from '../ReviewSection/ReviewSection';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ProductSection></ProductSection>
            <ReviewSection></ReviewSection>
            <Contact></Contact>
        </div>
    );
};

export default Home;