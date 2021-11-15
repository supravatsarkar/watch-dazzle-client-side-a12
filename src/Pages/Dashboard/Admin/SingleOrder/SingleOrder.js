import { Card, Typography, CardContent, CardMedia, CardActions, Button, Grid, Box, Paper, TableCell, TableRow, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const SingleOrder = ({ order, deleteOrder, handleStatus }) => {
    const { productId, time, email, status } = order;
    const [product, setProduct] = useState({});
    const { img, name, price, discount } = product;
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                // console.log('single order', data);
                setProduct(data);
            })
    }, [])


    // console.log('Single order', time);
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
                    <Typography variant="subtitle2" component="h6">
                        {name}
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

