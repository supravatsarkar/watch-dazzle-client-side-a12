import { Button, Divider, Grid, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Container>
            <Divider sx={{ mt: 5 }} />
            <Box sx={{ my: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'left' }}>
                        <Typography variant="h4" sx={{ fontWeight: '500' }}>Dazzle Watch</Typography>
                        <Box>
                            <Typography variant="h6">
                                Address
                            </Typography>
                            <Typography variant="body">
                                4710-4890 Breckinridge St, UK Burlington, VT 05401
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6">
                                Need Help?
                            </Typography>
                            <Typography variant="body">
                                Call: 1-800-345-6789
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h6">
                                About Menu
                            </Typography>
                            <Button variant="text" color="warning" size="small">Home</Button>
                            <Button variant="text" color="warning">Shop</Button>
                            <Button variant="text" color="warning">Product Sale</Button>
                            <Button variant="text" color="warning">Blog</Button>
                            <Button variant="text" color="warning">Pages</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Typography variant="h6">
                                Usefull Links
                            </Typography>
                            <Button variant="text" color="warning" size="small">Privacy Policy</Button>
                            <Button variant="text" color="warning">FAQ</Button>
                            <Button variant="text" color="warning">Return Policy</Button>
                            <Button variant="text" color="warning">Promotions</Button>
                            <Button variant="text" color="warning">Shop New</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Botom footer section*/}
            <Divider />

            <Box sx={{ mt: 1 }}>
                <Grid container rowSpacing={{ xs: 2 }} columnSpacing={48}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle">Copyright &copy; Dazzle Watch. All Right Reserved.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '40%' }} src='https://i.ibb.co/FWHVSRb/cards.png' alt='payment card' />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Footer;