import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import ProductCollection from '../Shared/ProductCollection/ProductCollection';

const ExploreProducts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ProductCollection ></ProductCollection>
            <Footer></Footer>
        </div>
    );
};

export default ExploreProducts;