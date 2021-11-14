import { Grid, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import OrderProduct from '../OrderProduct/OrderProduct';



const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrder] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    console.log('My Order, -', orders);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                setDataLoad(false);
            })
    }, [dataLoad])

    const deleteOrder = (id) => {
        const confirm = window.confirm('Are you delete this?');
        console.log('hit id-', id);
        if (confirm) {
            fetch(`http://localhost:5000/orders/?id=${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount >= 1) {
                        alert('delete successful');
                        setDataLoad(true);
                    }
                })
        }
    }
    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                My Order
            </Typography>
            <Typography variant="h6" sx={{}}>
                Total Order: {orders.length}
            </Typography>
            {/* <Typography variant="h6" sx={{color:"warning.main"}}>
                Total Price: {orders.length}
            </Typography> */}

            <Box container >
                <Grid container spacing={2}>
                    {
                        orders.map(order => <OrderProduct
                            key={order._id}
                            order={order}
                            deleteOrder={deleteOrder}
                        ></OrderProduct>)
                    }
                </Grid>
            </Box>

        </div>
    );
};

export default MyOrder;
{/* {
                    orders.map(order => <OrderProduct
                        key={order._id}
                        order={order}
                    ></OrderProduct>)
                } */}

{/* <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sl No.</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Brand</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order, index) => (
                            <OrderProduct
                                index={index}
                                key={order._id}
                                order={order}
                            >
                            </OrderProduct>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}