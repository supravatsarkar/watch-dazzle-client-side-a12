import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Review from '../Review/Review';

const reviews = [
    {
        id: 1,
        name: 'Krish Sarkar',
        comment: 'The elevation can be used to establish a hierachy between other content.',
        rating: 4
    },
    {
        id: 2,
        name: 'Krish Sarkar',
        comment: 'The elevation can be used to establish a hierachy between other content.',
        rating: 4
    },
    {
        id: 3,
        name: 'Krish Sarkar',
        comment: 'The elevation can be used to establish a hierachy between other content.',
        rating: 4
    },
    {
        id: 4,
        name: 'Krish Sarkar',
        comment: 'The elevation can be used to establish a hierachy between other content.',
        rating: 4
    },
]

const ReviewSection = () => {
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