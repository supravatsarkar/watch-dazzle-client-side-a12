import React, { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Button, Container } from '@mui/material';

import Navbar from '../../Shared/Navbar/Navbar';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, img, brand, price, features, discount } = product;
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProduct(data);
            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            {/* <h2>Product Details of id: {id}</h2> */}
            <Container>
                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Paper >
                            <img style={{ width: '80%' }} src={img} alt="" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
                        <Paper>
                            <Typography variant="h3" sx={{ fontWeight: 500, color: 'primary.main' }}>
                                Now Your Time to Watch Time with
                            </Typography>
                            <Typography variant="h1" sx={{ fontWeight: 900, color: 'primary.main' }}>
                                {name}
                            </Typography>
                            <Typography variant="h2" sx={{ fontWeight: 700 }}>
                                Discount {discount}%
                            </Typography>
                            <Button variant="contained" sx={{ fontWeight: 700 }}>Order</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductDetails;