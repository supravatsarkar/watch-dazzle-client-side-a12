import React, { useState, useEffect } from 'react';
import {
    NavLink,
    useParams
} from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Button, Container, Divider } from '@mui/material';

import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

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
                <Grid container spacing={6} sx={{ my: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Paper >
                            <img style={{ width: '80%' }} src={img} alt="" />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "flex-start" }}>
                        <Paper sx={{ textAlign: 'left', p: 2, width: 1 }}>
                            <Typography variant="h4" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                                {name}
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 600, my: 2, textDecoration: 'line-through' }}>
                                ${price?.toFixed(2)}
                            </Typography>
                            <Typography variant="h4" sx={{ color: 'error.main', fontWeight: 600, my: 2 }}>
                                ${price?.toFixed(2) * (discount / 100)}
                                <Typography variant="body" sx={{ fontWeight: 500, color: 'primary.main', mb: 3 }}>
                                    {'  '}{discount}% OFF
                                </Typography>
                            </Typography>

                            <Box gutterBottom variant="body" sx={{ display: 'block', fontWeight: 500 }}>
                                Brand:
                                <Typography gutterBottom variant="body" sx={{ fontWeight: 500, color: 'primary.main' }}>
                                    {' '}{brand}
                                </Typography>
                            </Box>

                            <Box gutterBottom variant="body" sx={{ display: 'block', fontWeight: 500, mb: 3 }}>
                                Availability:
                                <Typography gutterBottom variant="body" sx={{ fontWeight: 500, color: 'primary.main', mb: 3 }}>
                                    {' In Stock'}
                                </Typography>
                            </Box>
                            <Divider />
                            <Box gutterBottom variant="body" sx={{ display: 'block', fontWeight: 500, my: 3 }}>
                                Features:
                                <Typography gutterBottom variant="body" sx={{ fontWeight: 500, color: 'primary.main', mb: 3 }}>
                                    {' '}{features}
                                </Typography>
                            </Box>
                            <Divider />
                            <NavLink to='#' style={{ textDecoration: "none", width: '100%' }}>
                                <Button variant="contained" color="warning" sx={{ width: 1, mt: 3 }}>Buy Now</Button>
                            </NavLink>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;