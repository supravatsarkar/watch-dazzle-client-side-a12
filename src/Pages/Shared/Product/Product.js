import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, brand, price, features, discount } = product;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{}}>
                <CardMedia
                    component="img"
                    width="100%"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body" component="div" sx={{ color: 'error.main', fontWeight: 500 }}>
                        {discount}% OFF
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body" component="body" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        Brand: {brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {features.slice(0, 40)}...
                    </Typography>

                </CardContent>
                <CardContent>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 600, my: 2, textDecoration: 'line-through' }}>
                        ${price?.toFixed(2)}
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'error.main', fontWeight: 800 }}>
                        ${price?.toFixed(2) * (discount / 100)}
                    </Typography>
                    <NavLink to={`/products/${_id}`} style={{ textDecoration: "none" }}>
                        <Button variant="contained" color="warning">Buy Now</Button>
                    </NavLink>

                </CardActions>

            </Card>
        </Grid>

    );
};

export default Product;