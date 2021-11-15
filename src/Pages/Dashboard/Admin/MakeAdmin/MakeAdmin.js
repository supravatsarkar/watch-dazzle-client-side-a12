import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handelOnBlur = e => {
        const value = e.target.value;
        setEmail(value);
    }

    const handleOnSubmit = e => {
        fetch(`http://localhost:5000/users/makeAdmin/${email}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount === 0) {
                    alert('User not found');
                }
                else if (data.matchedCount && data.modifiedCount >= 1) {
                    alert('make admin success');
                    e.target.reset();
                }
                else if (data.matchedCount && data.modifiedCount === 0) {
                    alert('User already an admin');
                    e.target.reset();
                }

            });
        e.preventDefault();
    }

    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Make Admin
            </Typography>
            <Container maxWidth="sm">
                <Paper sx={{ p: 10 }}>
                    <form onSubmit={handleOnSubmit}>
                        <TextField
                            onChange={handelOnBlur}
                            name="email"
                            id=""
                            label="Enter Email Id"
                            variant="outlined"
                            sx={{ width: 1, mb: 1 }}
                            color="warning"
                            type="email"
                            required />
                        <Button type="submit" variant="contained" color="warning" sx={{ display: 'block', textAlign: 'center' }}>Make Admin</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default MakeAdmin;