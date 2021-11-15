import React, { useState, useEffect } from 'react';
import { Typography, TextField, Box, Button, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const EditProduct = () => {
    const { user } = useAuth();

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [productInfo, setProductInfo] = useState({});
    const { _id, productName, img, brand, price, features, discount, description } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, [id])

    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductInfo = { ...productInfo };
        if (field === 'price' || field === 'discount') {
            newProductInfo[field] = parseFloat(value);
        } else {
            newProductInfo[field] = value;
        }

        setProductInfo(newProductInfo);
    }

    const handleOnSubmit = e => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1) {
                    alert('Update Done');
                    // e.target.reset();
                } else {
                    alert('!!Edit any field to update');
                }
            });
        e.preventDefault();
    }
    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Edit Products Details
            </Typography>
            <Container maxWidth="sm">
                {
                    _id && <Box sx={{}}>
                        <form onSubmit={handleOnSubmit}>
                            <TextField
                                defaultValue={img}
                                onChange={handelOnChange}
                                name="img"
                                id="outlined-basic"
                                label="Image Link"
                                variant="outlined"
                                required
                                color="warning"
                                sx={{ width: 1, my: 1 }} />
                            <TextField
                                defaultValue={productName}
                                onChange={handelOnChange}
                                name="productName"
                                id="outlined-basic"
                                label="Product Name"
                                variant="outlined"
                                required
                                color="warning"
                                sx={{ width: 1, my: 1 }} />
                            <TextField
                                defaultValue={brand}
                                onChange={handelOnChange}
                                name="brand"
                                id="outlined-basic"
                                label="Brand"
                                variant="outlined"
                                required
                                color="warning"
                                sx={{ width: 1, mb: 1 }}
                            />
                            <TextField
                                defaultValue={price}
                                onChange={handelOnChange}
                                name="price"
                                type="number"
                                id="outlined-basic"
                                label="Price"
                                variant="outlined"
                                required
                                color="warning"
                                sx={{ width: 1, mb: 1 }}
                            />
                            <TextField
                                defaultValue={discount}
                                onChange={handelOnChange}
                                name="discount"
                                id="outlined-basic"
                                label="Discount in %"
                                variant="outlined"
                                sx={{ width: 1, mb: 1 }}
                                color="warning"
                                required />
                            <TextField
                                defaultValue={features}
                                multiline
                                minRows={2}
                                onChange={handelOnChange}
                                name="features"
                                id="outlined-basic"
                                label="Features"
                                variant="outlined"
                                sx={{ width: 1, mb: 1 }}
                                color="warning"
                                required />
                            <TextField
                                defaultValue={description}
                                multiline
                                minRows={3}
                                onChange={handelOnChange}
                                name="description"
                                id="outlined-basic"
                                label="Description"
                                variant="outlined"
                                sx={{ width: 1, mb: 1 }}
                                color="warning"
                                required />
                            <Button type="submit" variant="contained" color="warning" sx={{ display: 'block', textAlign: 'center' }}>Update Product</Button>
                        </form>
                    </Box>
                }
            </Container>
        </div>
    );
};

export default EditProduct;