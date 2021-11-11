import { Typography, Box } from '@mui/material';
import React from 'react';
import ProductCollection from '../../Shared/ProductCollection/ProductCollection';

const ProductSection = () => {
    const productSize = 6;
    return (
        <div style={{}}>
            <Box sx={{}}>
                <Typography variant="h4" sx={{ display: 'inline', color: 'warning.main', fontWeight: 500, my: 2, borderBottom: 2, borderColor: 'warning.500', }}>Today’s Deals</Typography>
            </Box>
            <ProductCollection productSize={productSize}></ProductCollection>
        </div>
    );
};

export default ProductSection;