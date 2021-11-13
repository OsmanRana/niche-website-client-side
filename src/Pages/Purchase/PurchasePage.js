import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Container, Grid, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Navigation from '../Shared/Navigation/Navigation';
import '../../Dashboard/AdminDashboard/AddProduct.css'
import useAuth from '../../hooks/useAuth';

const PurchasePage = () => {
    const [product, setProduct] = useState([]);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const { id } = useParams();
    const { user } = useAuth();

    //get product
    useEffect(() => {
        fetch(`https://mighty-bastion-98054.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const { productName, description, image, price } = product;
    const { displayName, email } = user;

    //send order
    const onSubmit = data => {
        const status = 'Pending'
        data.orderStatus = status;
        fetch('https://mighty-bastion-98054.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed successfully')
                    history.push('/')
                }
            })
    };


    return (
        <>
            {
                !product._id && <CircularProgress />
            }
            <Container sx={{ my: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 3 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={image}
                                    alt=""
                                />
                                <CardContent>
                                    <Typography sx={{ textAlign: 'left', color: 'primary.main', mb: 3 }} gutterBottom variant="h5" component="div">
                                        {productName}
                                    </Typography>
                                    <hr />
                                    <Typography sx={{ textAlign: 'left', color: 'text.secondary', my: 3 }} variant="body2" color="text.secondary">
                                        {description}
                                    </Typography>
                                    <hr />
                                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'red', mt: 3 }} gutterBottom variant="h5" component="div">
                                        Price: ${price}.00
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ borderRadius: 5, mb: 3, boxShadow: 3 }}>
                            <Typography sx={{ color: 'info.main', py: 3 }} variant="h3" gutterBottom component="div">
                                Place Order
                            </Typography>
                        </Box>
                        <form className="addProduct" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={productName} readOnly  {...register("productName", { required: true })} />
                            <input defaultValue={price} readOnly type="number" {...register("price", { required: true })} />
                            <input defaultValue="1" type="number" {...register("quantity", { min: 1, required: true })} />
                            <input defaultValue={displayName}   {...register("customerName", { required: true })} />
                            <input defaultValue={email} readOnly {...register("email", { required: true })} />
                            <input placeholder="Phone Number Please" type="number" {...register("phone", { required: true })} />
                            <textarea placeholder="Shipping Address"  {...register("address", { required: true })} />

                            <Button type="submit" sx={{ width: "90%" }} variant="contained">Confirm Order</Button>
                        </form>
                    </Grid>

                </Grid>
            </Container>
        </>
    );
};

export default PurchasePage;