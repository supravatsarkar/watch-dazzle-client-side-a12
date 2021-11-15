import React, { useEffect, useState } from 'react';
import { Card, Typography, CardContent, CardMedia, CardActions, Button, Grid, Box, Divider } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink, useRouteMatch } from 'react-router-dom';

const SingleProduct = ({ product, deleteOrder }) => {

    const { _id, img, productName, price, discount, brand, features } = product;
    const { path, url } = useRouteMatch();

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card sx={{}}>
                {
                    img ? <CardMedia
                        component="img"
                        // height="140px"
                        image={img}
                        alt="green iguana"
                    /> : <div>Loading...</div>
                }
                <CardContent>
                    <Typography variant="body" component="div" sx={{ color: 'error.main', fontWeight: 500 }}>
                        {discount}% OFF
                    </Typography>
                    <Typography variant="subtitle2" component="h6">
                        {productName}
                    </Typography>
                    <Typography variant="body" component="body" sx={{ color: 'warning.main', fontWeight: 500, }}>
                        Brand: {brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {features.slice(0, 40)}...
                    </Typography>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box>
                        <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 600, textDecoration: 'line-through', textAlign: 'center' }}>
                            ${price?.toFixed(2)}
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'error.main', fontWeight: 800, margin: '0 auto' }}>
                            ${(price * (discount / 100)).toFixed(2)}
                        </Typography>
                    </Box>
                </CardActions>
                <Divider />
                <Button variant="outlined" size='small' sx={{
                    my: 1
                }} onClick={() => deleteOrder(_id)}><DeleteForeverIcon />Delete Product</Button>
                <NavLink to={`${url}/${_id}`}>
                    <Button variant="outlined" size='small' sx={{ mb: 1 }} ><EditIcon /> Edit Product</Button>
                </NavLink>
            </Card>
        </Grid>
    );
};

export default SingleProduct;