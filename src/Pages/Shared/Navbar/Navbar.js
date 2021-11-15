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
                {/* <Toolbar sx={{ display: 'flex', pb: 1 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />

                        <img src={logo} style={{ width: '100px' }} alt="" />
                    </IconButton>


                </Toolbar> */}
                <img src={logo} style={{ width: '100px' }} alt="" />
                {
                    user.email && <Typography variant="div" sx={{ flexGrow: 1, fontWeight: 300, m: 0, p: 0 }}>
                        Name: {user.displayName}
                    </Typography>
                }
                <Box>
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
                </Box>
            </AppBar>
        </Box>
    );
};

export default Navbar;