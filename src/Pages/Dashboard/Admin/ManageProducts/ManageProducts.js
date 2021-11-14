import { Typography } from '@mui/material';
import React from 'react';

const ManageProducts = () => {
    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Manage Products
            </Typography>
        </div>
    );
};

export default ManageProducts;