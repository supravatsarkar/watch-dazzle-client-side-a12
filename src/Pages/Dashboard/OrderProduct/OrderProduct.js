import { Card, Typography, CardContent, CardMedia, CardActions, Button, Grid, Box, Paper, TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const OrderProduct = ({ order, deleteOrder }) => {
    const { productId, status } = order;
    const [product, setProduct] = useState({});
    const { img, productName, price, brand, discount } = product;
    const notAvailableProduct = {
        img: 'Not Available',
        productName: 'Product deleted from database',
        price: 'Not Available',
        discount: 'Not Available'
    }
    useEffect(() => {
        fetch(`https://fierce-river-92206.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setProduct(data);
                } else {
                    setProduct(notAvailableProduct);
                }

            })
    }, [])

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card sx={{}}>
                {
                    img ? <CardMedia
                        component="img"
                        // height="140"
                        image={img}
                        alt="image not available"
                    /> : <div>Loading...</div>
                }
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h5">
                        {productName}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component="h5" color="warning.main">
                        Price: ${(price * (discount / 100)).toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Brand: {brand}
                        {/* _id:{order._id} */}
                    </Typography>
                </CardContent>
                <Typography gutterBottom variant="subtitle2" component="h5" color="warning.main">
                    Status: {status}
                </Typography>
                <CardActions>
                    <Button onClick={() => deleteOrder(order._id)}><DeleteForeverIcon /> Delete Order</Button>
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
