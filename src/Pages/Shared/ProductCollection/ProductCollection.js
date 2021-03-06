import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import CircularProgress from '@mui/material/CircularProgress';

const ProductCollection = ({ productSize }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fierce-river-92206.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <Container>
            {products.length ?
                <Grid container spacing={2} sx={{ my: 2 }}>
                    {
                        products.slice(0, productSize).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Grid>
                : <CircularProgress />
            }
        </Container>
    );
};

export default ProductCollection;