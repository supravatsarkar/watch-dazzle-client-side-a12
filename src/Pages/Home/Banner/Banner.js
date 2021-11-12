import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography, Button } from '@mui/material';
import { NavLink } from "react-router-dom";
import banner from '../../../images/banner/banner.png';
import SharedCarousel from '../../Shared/SharedCarousel/SharedCarousel';


const Banner = () => {
    return (
        <div style={{}}>
            <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={12} md={6}>
                    {/* <SharedCarousel></SharedCarousel> */}
                    <img style={{ width: '80%' }} src={banner} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
                    <Box>
                        <Typography variant="h3" sx={{ fontWeight: 500, color: 'primary.main' }}>
                            Now Your Time to Watch Time with
                        </Typography>
                        <Typography variant="h1" sx={{ fontWeight: 900, color: 'primary.main' }}>
                            Dazzle Watch
                        </Typography>
                        <Typography variant="h2" sx={{ fontWeight: 700 }}>
                            UPTO 50% OFF
                        </Typography>
                        <NavLink to='/exploreProducts' style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" size="large" color="warning" sx={{ fontWeight: 700, marginTop: 4 }}>Explore Collection</Button>
                        </NavLink>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;