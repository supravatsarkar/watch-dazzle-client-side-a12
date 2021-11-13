import { Typography, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Page404 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Typography variant="h3" color="error.main" sx={{ fontWeight: 600 }}>
                404
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 400, mb: 3 }}>
                NOT FOUND
            </Typography>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Button variant="outlined">Go to Home</Button>
            </NavLink>
            <Footer></Footer>
        </div>
    );
};

export default Page404;