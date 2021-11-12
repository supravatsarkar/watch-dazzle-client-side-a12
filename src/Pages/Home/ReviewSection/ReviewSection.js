import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Review from '../Review/Review';


const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{}}>
                <Typography variant="h4" sx={{ display: 'inline', color: 'warning.main', fontWeight: 500, my: 4, borderBottom: 2, borderColor: 'warning.500', }}>Customers Reviews</Typography>
            </Box>

            <Grid container spacing={2} sx={{ my: 2 }}>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </Grid>

        </Container>
    );
};

export default ReviewSection;