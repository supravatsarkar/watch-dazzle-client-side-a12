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
import logo from '../../../images/dazzle-watch.png';

const Navbar = () => {
    const { logout, user } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar sx={{ display: 'flex', alignItems: 'flex-end', pb: 1 }}>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />

                    </IconButton> */}
                    <img src={logo} style={{ width: '100px' }} alt="" />
                    <Typography variant="caption" sx={{ flexGrow: 1, fontWeight: 500 }}>
                        Name: {user.displayName}
                    </Typography>

                    {
                        // user.email && <Typography variant="body1" component="p" sx={{ flexGrow: 1 }}>
                        //     Logged In: {user.email}
                        // </Typography>
                    }
                    <NavLink to='/home' style={{ textDecoration: 'none', marginRight: '10px', color: 'white', fontWeight: '400', borderBottom: '2px solid white', padding: '8px' }}>
                        Home
                    </NavLink>
                    <NavLink to='/exploreProducts' style={{ textDecoration: 'none', marginRight: '10px', color: 'white', fontWeight: '400', borderBottom: '2px solid white', padding: '8px' }}>
                        Explore
                    </NavLink>

                    {
                        user.email ? <>
                            <NavLink to='/dashboard' style={{ textDecoration: 'none', marginRight: '10px', color: 'white', fontWeight: '400', borderBottom: '2px solid white', padding: '8px' }}>
                                Dashboard
                            </NavLink>
                            <Button onClick={logout} variant="contained" color="warning" size='small'>Logout</Button>
                        </>

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