import React from 'react';
import { Paper, Grid, Typography, Avatar, Rating } from '@mui/material';
import people from '../../../images/avatar.png';

const Review = ({ review }) => {
    const { userName, comment, rating, userImg } = review;


    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2 }}>
                <Avatar sx={{ display: 'block', margin: '0 auto', mb: 1 }} alt='img' src={userImg || people} />
                <Typography variant="subtitle2" gutterBottom component="div" >
                    {userName || 'User Name'}
                </Typography>
                <Rating name="read-only" value={rating} readOnly />
                <Typography variant="body2" gutterBottom component="div" color="text.secondary" sx={{ textAlign: 'left' }} >
                    {comment}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Review;