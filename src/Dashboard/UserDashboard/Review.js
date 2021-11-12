import { Button, Grid, Box, Typography, Container } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import '../AdminDashboard/AddProduct.css'



const Review = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://mighty-bastion-98054.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review added successfully')
                    reset();
                }
            })

    };
    return (
        <Container>

            <Grid container>
                <Grid item md={2}>

                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ borderRadius: 5, my: 3, boxShadow: 3 }}>
                        <Typography sx={{ color: 'info.main', py: 3 }} variant="h3" gutterBottom component="div">
                            Review
                        </Typography>
                    </Box>
                    <form className="addProduct" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder={user.displayName} {...register("customerName", { required: true })} />
                        {errors.customerName && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                            Please write your full name
                        </Typography>}
                        <textarea style={{ height: '25vh' }} placeholder="Please Share your thoughts" {...register("description", { required: true })} />
                        {errors.description && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                            This field is required
                        </Typography>}
                        <input placeholder="Please Rate 0-5" type="number" {...register("rating", { required: true, min: 0, max: 5 })} />
                        {errors.rating && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                            Please write 0 to 5
                        </Typography>}
                        <Button type="submit" sx={{ width: "90%" }} variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid item md={2}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Review;