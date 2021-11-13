import { Button, Grid, Box, Typography, Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../../../Dashboard/AdminDashboard/AddProduct.css'

const AskAnExpert = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        alert('Request received successfully')
        reset();
    };
    return (
        <Container sx={{ my: 5 }}>
            <Grid container>
                <Grid item md={2}>
                    
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ borderRadius: 5, my: 3, boxShadow: 3 }}>
                    <img style={{width: '100%', borderRadius: '15px'}} src="/ask.jpg" alt="" />
                    </Box>
                    <form className="addProduct" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Your full name please" {...register("customerName", { required: true })} />
                        {errors.customerName && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                            Please write your full name
                        </Typography>}
                        <input placeholder="Email Please" {...register("email", { required: true })} />
                        {errors.customerName && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                            Please write your email address
                        </Typography>}
                        <textarea style={{ height: '15vh' }} placeholder="Please Share your thoughts" {...register("description", { required: true })} />
                        {errors.description && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                            This field is required
                        </Typography>}
                        <input placeholder="Contact Number please" type="number" {...register("phone", { required: true })} />
                        {errors.rating && <Typography sx={{ color: 'error.main', py: 3 }} gutterBottom component="div">
                            Please write caontact number
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

export default AskAnExpert;