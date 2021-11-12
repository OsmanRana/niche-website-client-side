import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewDetails from './ReviewDetails';

const Reviews = () => {
    const [reviews, seRviews] = useState([]);
    useEffect(() => {
        fetch('https://mighty-bastion-98054.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => seRviews(data))
    }, [])
    return (
        <Container>
            {
                !reviews.length && <CircularProgress />
            }
            <Grid container spacing={2}>

                {
                    reviews?.map(review => <ReviewDetails
                        key={review._id}
                        review={review}
                    ></ReviewDetails>)
                }

            </Grid>
        </Container>
    );
};

export default Reviews;