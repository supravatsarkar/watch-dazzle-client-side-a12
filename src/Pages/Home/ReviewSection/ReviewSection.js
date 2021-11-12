import React from 'react';
import { Box, Typography } from '@mui/material';

const ReviewSection = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Box sx={{}}>
                <Typography variant="h4" sx={{ display: 'inline', color: 'warning.main', fontWeight: 500, my: 4, borderBottom: 2, borderColor: 'warning.500', }}>Customers Reviews</Typography>
            </Box>

        </Box>
    );
};

export default ReviewSection;