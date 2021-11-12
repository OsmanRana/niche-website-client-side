import { Button, Grid, Box, Typography, Container } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://mighty-bastion-98054.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully')
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
                    <Box sx={{ borderRadius: 5, my:3, boxShadow: 3 }}>
                        <Typography sx={{ color: 'info.main', py:3 }} variant="h3" gutterBottom component="div">
                            Add Product
                        </Typography>
                    </Box>
                    <form className="addProduct" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Product Name" {...register("productName", { required: true })} />
                        <textarea placeholder="Description" {...register("description", { required: true })} />
                        <input placeholder="Product Price" type="number" {...register("price", { required: true })} />
                        <input placeholder="Stock" type="number" {...register("availableQuantity", { required: true })} />
                        <input placeholder="Image URL" {...register("image", { required: true })} />
                        <Button type="submit" sx={{ width: "90%" }} variant="contained">Submit</Button>
                    </form>
                </Grid>
                <Grid item md={2}>

                </Grid>
            </Grid>

        </Container>
    );
};

export default AddProduct;