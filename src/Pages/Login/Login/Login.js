import React, { useState } from 'react';
import {
    Paper,
    TextField,
    Box, Container,
    Typography,
    Button,
    CircularProgress,
    Alert
} from '@mui/material';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import {
    useHistory,
    useLocation
} from "react-router-dom";


const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const { login, loading, error } = useAuth();

    const history = useHistory();
    const location = useLocation();

    const handleLoginInfo = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    }
    const handleOnSubmit = e => {
        const { email, password } = loginInfo;
        if (email === '' || password === '') {
            alert('please carefully enter the filed');
            return;
        }
        login(email, password, history, location);
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
                                onChange={handleLoginInfo}
                                name="email"
                                id="standard-basic"
                                label="Email"
                                variant="standard"
                                sx={{ width: '80%', mb: 3 }}
                                color="warning" type="email" required />
                            <TextField
                                onChange={handleLoginInfo}
                                name="password"
                                id="standard-basic"
                                label="Password"
                                variant="standard"
                                sx={{ width: '80%', mb: 3 }}
                                color="warning" type="password" required />
                            <br />
                            {
                                error && <Alert severity="error">{error}</Alert>
                            }
                            <Button type='submit' variant="contained" color="warning">Login</Button>
                        </form>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <NavLink to="/register" style={{ textDecoration: 'none', fontWeight: '500' }}>Create an Account</NavLink>
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