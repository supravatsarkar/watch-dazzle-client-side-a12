import React, { useState, useEffect } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SingleOrder from '../SingleOrder/SingleOrder';
import CircularProgress from '@mui/material/CircularProgress';


const ManageOrders = () => {
    // const [allOrders, setAllOrders] = useState([]);
    const [orders, setOrder] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    useEffect(() => {
        fetch('https://fierce-river-92206.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                setDataLoad(false);
            })
    }, [dataLoad])

    const deleteOrder = (id) => {
        const confirm = window.confirm('Are you delete order?');
        if (confirm) {
            fetch(`https://fierce-river-92206.herokuapp.com/orders/?id=${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount >= 1) {
                        alert('delete successful');
                        setDataLoad(true);
                    }
                })
        }
    }

    const handleStatus = id => {
        fetch(`https://fierce-river-92206.herokuapp.com/allOrders/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                setDataLoad(true);
                if (data.modifiedCount >= 1) {
                    alert('Order Shipped')
                } else {
                    alert('Order ALready Shipped')
                }

            });
    }

    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Manage All Orders
            </Typography>
            <Typography variant="h6" color="error.main" sx={{ fontWeight: 400, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Total Order: {orders.length}
            </Typography>
            {
                orders.length ? <Box container >
                    <Grid container spacing={2}>
                        {
                            orders.map(order => <SingleOrder
                                key={order._id}
                                order={order}
                                deleteOrder={deleteOrder}
                                handleStatus={handleStatus}
                            ></SingleOrder>)
                        }
                    </Grid>
                </Box>
                    :
                    <CircularProgress color="warning" />
            }
        </div>
    );
};

export default ManageOrders;