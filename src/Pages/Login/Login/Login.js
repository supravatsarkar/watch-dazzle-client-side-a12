import React, { useState } from 'react';
import { Paper, TextField, Box, Container, Typography, Button, CircularProgress } from '@mui/material';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const { login, loading } = useFirebase();
    console.log('Loading', loading);

    const handleLoginInfo = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
        // console.log(newLoginInfo);
    }
    const handleOnSubmit = e => {
        const { email, password } = loginInfo;
        login(email, password);
        // console.log(loginInfo);
        e.preventDefault();
    }
    return (
        <div>
            <Navbar></Navbar>
            <Container maxWidth="sm">


                <Paper elevation={8} sx={{ p: 5, mt: 20, borderRadius: 3, }}>
                    {loading && <CircularProgress color="success" />}
                    {!loading && <>
                        <Box sx={{ color: "", mb: 3 }}>
                            <Typography variant="h4" >
                                Login
                            </Typography>
                            <Typography variant="body" >
                                Please login bellow using account details
                            </Typography>
                        </Box>
                        <form onSubmit={handleOnSubmit} style={{ marginBottom: '10px', }}>
                            <TextField
                                onBlur={handleLoginInfo}
                                name="email"
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                sx={{ width: '80%', mb: 3 }}
                                color="warning" type="email" />
                            <TextField
                                onBlur={handleLoginInfo}
                                name="password"
                                id="standard-basic"
                                label="Password"
                                variant="standard"
                                sx={{ width: '80%', mb: 3 }}
                                color="warning" type="password" />
                            <br />
                            <Button type='submit' variant="contained" color="warning">Login</Button>
                        </form>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <NavLink to="/register" style={{ textDecoration: 'none', fontWeight: '500' }}>Create Account</NavLink>
                            <NavLink to="/" style={{ textDecoration: 'none', fontWeight: '500' }}>Reset Password</NavLink>
                        </Box>
                    </>
                    }
                </Paper>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;