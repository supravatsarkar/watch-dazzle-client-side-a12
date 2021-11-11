import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const ProductCollection = ({ productSize }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
    }, [])
    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 2 }}>
                {
                    products.slice(0, productSize).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </Grid>

        </Container>
    );
};

export default ProductCollection;