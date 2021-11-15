import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import SingleProduct from '../SingleProduct/SingleProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
                setDataLoad(false);
            })
    }, [dataLoad])

    const deleteOrder = (id) => {
        // console.log('hit id-', id);
        const confirm = window.confirm('Are you delete product?');
        if (confirm) {
            fetch(`http://localhost:5000/products/?id=${id}`, {
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
                Manage Products
            </Typography>
            <Typography variant="h6" color="error.main" sx={{ fontWeight: 400, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Total Added Products: {products.length}
            </Typography>
            <Box container >
                <Grid container spacing={2}>
                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                            deleteOrder={deleteOrder}
                        ></SingleProduct>)
                    }
                </Grid>
            </Box>

        </div>
    );
};

export default ManageProducts;