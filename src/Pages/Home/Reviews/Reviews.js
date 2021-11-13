import { CircularProgress, Container, Grid, Typography } from '@mui/material';
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
            
            <img style={{width:'100%', marginTop: '30px'}} src='/review-banner.jpg' alt=""/>
            <Typography sx={{ color: 'info.main', fontWeight: 'light', mt: -23, mb: 20, display: { xs: 'none', sm: 'block' }  }} variant="h2">CUSTOMER TESTIMONY </Typography>
            <Typography sx={{ color: 'info.main', fontWeight: 'light', my: 5, display: { xs: 'block', sm: 'none' }  }} variant="h2">CUSTOMER TESTIMONY </Typography>
            {
                !reviews.length && <CircularProgress />
            }
            
            <Grid sx={{mt:5}} container spacing={2}>

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