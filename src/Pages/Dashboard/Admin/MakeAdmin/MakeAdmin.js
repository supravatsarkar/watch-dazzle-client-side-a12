import { Typography } from '@mui/material';
import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Make Admin
            </Typography>
        </div>
    );
};

export default MakeAdmin;