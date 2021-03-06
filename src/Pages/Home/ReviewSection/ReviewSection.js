import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Review from '../Review/Review';
import CircularProgress from '@mui/material/CircularProgress';


const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://fierce-river-92206.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Container >
            <Box sx={{ mt: 5 }}>
                <Typography variant='h3' sx={{ color: "warning.main", fontWeight: 800, mb: 1 }}>
                    Customers Reviews
                </Typography>

                {
                    reviews.length ? <Grid container spacing={2} sx={{ my: 2 }}>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </Grid>
                        :
                        <CircularProgress />
                }
            </Box>
        </Container>
    );
};

export default ReviewSection;