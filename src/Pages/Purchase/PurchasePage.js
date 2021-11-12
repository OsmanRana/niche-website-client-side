import { Card, CardActionArea, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../Shared/Navigation/Navigation';

const PurchasePage = () => {
    const [product, setProduct] = useState([]);
    console.log(product)
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://mighty-bastion-98054.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const { productName, description, image, price } = product;

    return (
        <>
            <Navigation></Navigation>
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

                </Grid>
            </Container>
        </>
    );
};

export default PurchasePage;