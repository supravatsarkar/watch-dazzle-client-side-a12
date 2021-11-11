import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Grid, Button } from '@mui/material';

const Product = ({ product }) => {
    const { name, img, brand, price, features, discount } = product;
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
                    <Typography variant="h6" sx={{ color: 'error.main', fontWeight: 600 }}>
                        ${price.toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="warning">Buy Now</Button>
                </CardActions>

            </Card>
        </Grid>

    );
};

export default Product;