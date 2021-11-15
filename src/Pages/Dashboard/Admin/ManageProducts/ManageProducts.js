import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid } from '@mui/material';
import SingleProduct from '../SingleProduct/SingleProduct';
import CircularProgress from '@mui/material/CircularProgress';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [dataLoad, setDataLoad] = useState(false);
    useEffect(() => {
        fetch('https://fierce-river-92206.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDataLoad(false);
            })
    }, [dataLoad])

    const deleteOrder = (id) => {
        const confirm = window.confirm('Are you delete product?');
        if (confirm) {
            fetch(`https://fierce-river-92206.herokuapp.com/products/?id=${id}`, {
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
    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Manage Products
            </Typography>
            <Typography variant="h6" color="error.main" sx={{ fontWeight: 400, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Total Added Products: {products.length}
            </Typography>
            {
                products.length ? <Box container >
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
                    :
                    <CircularProgress color="warning" />
            }
        </div>
    );
};

export default ManageProducts;