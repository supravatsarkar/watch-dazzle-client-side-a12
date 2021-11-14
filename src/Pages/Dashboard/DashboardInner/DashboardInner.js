import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardInner = () => {
    const { user } = useAuth()
    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main' }}>User Information</Typography>

            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.email}</p>
        </div>
    );
};

export default DashboardInner;