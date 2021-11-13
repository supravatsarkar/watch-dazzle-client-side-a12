import React, { useState } from 'react';
import { Paper, TextField, Box, Container, Typography, Button, CircularProgress, Alert } from '@mui/material';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const { register, loading, error } = useAuth();

    const handleLoginInfo = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
        // console.log(newLoginInfo);
    }
    const handleOnSubmit = e => {
        e.preventDefault();
        const { email, password, password2 } = loginInfo;

        if (password !== password2) {
            alert('Password not match!!')
            return;
        }
        register(email, password);

    }
    return (
        <div>
            <Navbar></Navbar>
            <Container maxWidth="sm">
                {loading && <CircularProgress color="success" />}
                {!loading && <>
                    <Paper elevation={8} sx={{ p: 5, mt: 20, borderRadius: 3, }}>
                        <Box sx={{ color: "", mb: 3 }}>
                            <Typography variant="h4" >
                                Create Account
                            </Typography>
                            <Typography variant="body" >
                                Please Register using account detail bellow.
                            </Typography>
                        </Box>
                        <form onSubmit={handleOnSubmit} style={{ marginBottom: '10px', }}>
                            <TextField
                                onBlur={handleLoginInfo}
                                name="name"
                                id="standard-basic"
                                label="Name"
                                variant="standard"
                                sx={{ width: '80%', mb: 3 }}
                                color="warning" />
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
                            <TextField
                                onBlur={handleLoginInfo}
                                name="password2"
                                id="standard-basic"
                                label="Re Enter Password"
                                variant="standard"
                                sx={{ width: '80%', mb: 3 }}
                                color="warning" type="password" />
                            <br />
                            <Alert severity="error">{error}</Alert>
                            <Button type='submit' variant="contained" color="warning">Create Account</Button>
                        </form>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <NavLink to="/login" style={{ textDecoration: 'none', fontWeight: '500' }}>Have an account? Please Login</NavLink>
                            <NavLink to="/" style={{ textDecoration: 'none', fontWeight: '500' }}>Reset Password</NavLink>
                        </Box>
                    </Paper>
                </>
                }
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;