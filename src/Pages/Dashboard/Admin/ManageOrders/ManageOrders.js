import React, { useState, useEffect } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SingleOrder from '../SingleOrder/SingleOrder';



const ManageOrders = () => {
    // const [allOrders, setAllOrders] = useState([]);
    const [orders, setOrder] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrder(data);
                setDataLoad(false);
            })
    }, [dataLoad])

    const deleteOrder = (id) => {
        const confirm = window.confirm('Are you delete order?');
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

    const handleStatus = id => {
        fetch(`http://localhost:5000/allOrders/${id}`, {
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
            <Box container >
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
        </div>
    );
};

export default ManageOrders;