import { Card, Typography, CardContent, CardMedia, CardActions, Button, Grid, Box, Paper, TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const OrderProduct = ({ order, deleteOrder }) => {
    const { productId } = order;
    const [product, setProduct] = useState({});
    const { img, name, price, brand, discount } = product;
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
    }, [])
    console.log('img load', img);
    return (
        <Grid item xs={6} sm={4} md={3}>
            <Card sx={{}}>
                {
                    img ? <CardMedia
                        component="img"
                        // height="140"
                        image={img}
                        alt="green iguana"
                    /> : <div>Loading...</div>
                }
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {name}
                    </Typography>
                    <Typography variant="h6" color="warning.main">
                        Price: ${price * (discount / 100)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Brand: {brand}
                        {/* _id:{order._id} */}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => deleteOrder(order._id)}><DeleteForeverIcon /> Delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default OrderProduct;

{/* <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        //     <TableCell align="center" >{index + 1}
        //     </TableCell>
        //     <TableCell align="center">{name}</TableCell>
        //     <TableCell align="center"><img style={{ width: '50px' }} src={img} alt="" />
        //     </TableCell>
        //     <TableCell align="center">{price}</TableCell>
        //     <TableCell align="center">{brand}</TableCell> */}
        // </TableRow>
