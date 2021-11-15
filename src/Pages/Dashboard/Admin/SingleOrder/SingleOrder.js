import React, { useEffect, useState } from 'react';
import { Card, Typography, CardContent, CardMedia, CardActions, Button, Grid, Box, Paper, TableCell, TableRow, Divider } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const SingleOrder = ({ order, deleteOrder, handleStatus }) => {
    const { productId, time, email, status } = order;
    const [product, setProduct] = useState({});

    const { img, productName, price, discount } = product;
    const notAvailableProduct = {
        img: 'Not Available',
        productName: 'Product deleted from database',
        price: 'Not Available',
        discount: 'Not Available'
    }
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setProduct(data);
                } else {
                    setProduct(notAvailableProduct);
                }

            })
    }, [productId])

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card sx={{}}>
                {
                    img ? <CardMedia
                        component="img"
                        // height="140px"
                        image={img}
                        alt="Image not available"
                    /> : <div>Loading...</div>
                }
                <CardContent>
                    <Typography variant="subtitle2" component="h6">
                        {productName}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h6" color="warning.main">
                        Price: ${(price * (discount / 100)).toFixed(2)}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        User Email: {email}
                        {/* Order Time:{time?.toDateString()} */}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h5" color="warning.main">
                        Status: {status}
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
                <Divider />
                <Button variant="outlined" size='small' sx={{
                    my
                        : 1
                }} onClick={() => deleteOrder(order._id)}><DeleteForeverIcon />Delete Order</Button>
                <Button variant="outlined" size='small' sx={{ mb: 1 }} onClick={() => { handleStatus(order._id) }}><LocalShippingIcon /> Shipping Order</Button>
            </Card>
        </Grid>
    );
};

export default SingleOrder;

