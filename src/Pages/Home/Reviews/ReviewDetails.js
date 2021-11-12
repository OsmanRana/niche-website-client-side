import { Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ReviewDetails = (review) => {
    const { customerName, description, rating } = review.review;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, p: 3 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography sx={{ textAlign: 'left', color: 'primary.main', mb: 3 }} gutterBottom variant="h5" component="div">
                            {customerName}
                        </Typography>
                        <hr />
                        <Typography sx={{ textAlign: 'left', color: 'text.secondary', my: 3 }} variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <hr />
                        <Stack spacing={1}>
                            <Rating name="size-large" defaultValue={parseInt(rating)} size="large" readOnly />
                        </Stack>
                    </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
            </Card>
        </Grid>
    );
};

export default ReviewDetails;