import { Avatar, Typography, Paper } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import people from '../../../images/avatar.png'

const DashboardHome = () => {
    const { user, admin } = useAuth();

    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main' }}>User Information</Typography>
            <Paper sx={{ p: 3, m: 3 }}>
                <Avatar sx={{ display: 'block', margin: '0 auto', mb: 1 }} alt='img' src={user.photoUrl || people} />
                <Typography variant="h6" color="warning.main" sx={{ fontWeight: 600 }}>Name: {user.displayName}</Typography>
                <Typography variant="h6" color="warning.main" sx={{ fontWeight: 300 }}>Email: {user.email}</Typography>

                <Typography variant="h6" color="warning.main" sx={{ fontWeight: 500 }}>Role: {admin ? 'Admin' : 'Customer'}</Typography>
            </Paper>
        </div>
    );
};

export default DashboardHome;