import React, { useState, useEffect } from 'react';
import { Typography, TextField, Box, Button, Container } from '@mui/material';


const AddProducts = () => {
    // const { _id, productName, img, brand, price, features, discount } = product;
    // const { user } = useAuth();
    const [productInfo, setProductInfo] = useState({});

    const handelOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductInfo = { ...productInfo };
        if (field === 'price' || field === 'discount') {
            newProductInfo[field] = parseFloat(value);
        } else {
            newProductInfo[field] = value;
        }
        console.log(newProductInfo);
        setProductInfo(newProductInfo);
    }

    const handleOnSubmit = e => {
        console.log(productInfo);
        fetch('https://fierce-river-92206.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successfully');
                    e.target.reset();

                }
            });
        e.preventDefault();
    }

    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Add Products
            </Typography>
            <Container maxWidth="sm">
                <Box sx={{}}>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            onBlur={handelOnBlur}
                            name="img"
                            id="outlined-basic"
                            label="Image Link"
                            variant="outlined"
                            required
                            color="warning"
                            sx={{ width: 1, my: 1 }} />
                        <TextField
                            onBlur={handelOnBlur}
                            name="productName"
                            id="outlined-basic"
                            label="Product Name"
                            variant="outlined"
                            required
                            color="warning"
                            sx={{ width: 1, my: 1 }} />
                        <TextField
                            onBlur={handelOnBlur}
                            name="brand"
                            id="outlined-basic"
                            label="Brand"
                            variant="outlined"
                            required
                            color="warning"
                            sx={{ width: 1, mb: 1 }}
                        />
                        <TextField
                            onBlur={handelOnBlur}
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
                            onBlur={handelOnBlur}
                            name="discount"
                            id="outlined-basic"
                            label="Discount in %"
                            variant="outlined"
                            sx={{ width: 1, mb: 1 }}
                            color="warning"
                            required />
                        <TextField
                            multiline
                            minRows={2}
                            onBlur={handelOnBlur}
                            name="features"
                            id="outlined-basic"
                            label="Features"
                            variant="outlined"
                            sx={{ width: 1, mb: 1 }}
                            color="warning"
                            required />
                        <TextField
                            multiline
                            minRows={3}
                            onBlur={handelOnBlur}
                            name="description"
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                            sx={{ width: 1, mb: 1 }}
                            color="warning"
                            required />
                        <Button type="submit" variant="contained" color="warning" sx={{ display: 'block', textAlign: 'center' }}>Add Product</Button>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default AddProducts;