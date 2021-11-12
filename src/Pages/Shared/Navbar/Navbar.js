import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="h1" sx={{ flexGrow: 1, fontWeight: 500 }}>
                        Dazzle Watch
                    </Typography>

                    <NavLink to='/home' style={{ textDecoration: 'none' }}>
                        <Button variant="outlined">Home</Button>
                    </NavLink>
                    <NavLink to='/exploreProducts'>
                        <Button color="inherit">Explore Products</Button>
                    </NavLink>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;