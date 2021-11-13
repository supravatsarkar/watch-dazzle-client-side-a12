import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const { logout, user } = useAuth();

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
                    {
                        user.email && <Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
                            Logged In: {user.email}
                        </Typography>
                    }
                    <NavLink to='/home' style={{ textDecoration: 'none', marginRight: '5px' }}>
                        <Button variant="contained" color="warning" size='small'>Home</Button>
                    </NavLink>
                    <NavLink to='/exploreProducts' style={{ textDecoration: 'none', marginRight: '5px' }}>
                        <Button variant="contained" color="warning" size='small'>Explore Products</Button>
                    </NavLink>

                    {
                        user.email ?
                            <Button onClick={logout} variant="contained" color="warning" size='small'>Logout</Button>
                            :
                            <NavLink to='/login' style={{ textDecoration: 'none', marginRight: '5px' }}>
                                <Button variant="contained" color="warning" size='small'>Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;