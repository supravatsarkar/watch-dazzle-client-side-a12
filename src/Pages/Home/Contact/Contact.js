import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Contact = () => {
    const handleOnSubmit = e => {
        alert('Thanks for message');
        e.preventDefault();
    }
    return (
        <Container>
            <Paper elevation={8} sx={{ p: 4, my: 4 }}>
                <Typography variant='h3' sx={{ color: "warning.main", fontWeight: 800, mb: 3 }}>
                    Tell Us Your Message
                </Typography>
                <form onSubmit={handleOnSubmit} style={{ display: 'flex', margin: '0 auto', flexDirection: 'column', width: '75%' }}>
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" color='warning' sx={{ mb: 2 }} required />
                    <TextField id="outlined-basic" label="Your Email" variant="outlined" color='warning' type="email" sx={{ mb: 2 }} required />
                    <TextField id="outlined-basic" label="Subject" variant="outlined" color='warning' sx={{ mb: 2 }} required />
                    <TextField multiline
                        rows={4} id="outlined-basic" label="Message" variant="outlined" color='warning' sx={{ mb: 2 }} required />
                    <Button type="submit" variant="contained" color="warning">Send Massage</Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Contact;