import React, { useState } from 'react';
import { Typography, TextField, Paper, Button, Container } from '@mui/material';
import Rating from '@mui/material/Rating';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const [ratingValue, setRatingValue] = React.useState(1);
    const { user } = useAuth();
    const [reviewInfo, setReviewInfo] = useState({});
    const [isAlert, setisAlert] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewsInfo = { ...reviewInfo };
        newReviewsInfo[field] = value;
        setReviewInfo(newReviewsInfo);
    }
    reviewInfo.rating = ratingValue;
    reviewInfo.userName = user.displayName;
    reviewInfo.userEmail = user.email;
    reviewInfo.userImg = user.photoURL;

    const handleOnSubmit = e => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added successfully');
                    e.target.reset();
                    setRatingValue(1);
                }
            })
        e.preventDefault();

    }

    return (
        <div>
            <Typography variant="h4" color="error.main" sx={{ fontWeight: 600, borderBottom: 1, borderColor: 'error.main', mb: 2 }}>
                Add Review
            </Typography>
            <Container maxWidth="sm">
                <Paper>
                    <form onSubmit={handleOnSubmit} style={{ width: '100%', margin: '10px auto' }}>
                        <TextField
                            onBlur={handleOnBlur}
                            name="productName"
                            id="outlined-basic"
                            label="Product Name"
                            variant="outlined"
                            sx={{ width: 1, color: 'warning.main', mb: 2 }}
                            color='warning'
                        />
                        <TextField multiline
                            onBlur={handleOnBlur}
                            name="comment"
                            rows={4}
                            id="outlined-basic"
                            label="Write your review"
                            variant="outlined"
                            sx={{ width: 1, color: 'warning.main', mb: 2 }}
                            color='warning'
                        />
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                                // handleOnBlur()
                            }}
                        />
                        <br />
                        <Button type="submit" variant="contained" color="warning" sx={{ mb: 2 }}>Submit Review</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export default AddReview;