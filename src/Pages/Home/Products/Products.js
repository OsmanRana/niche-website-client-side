import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useProductCollection from '../../../hooks/useProductCollection';
import Product from './Product';

const Products = () => {
    const { products } = useProductCollection()
    return (
        <Container>
            <Typography sx={{ color: 'info.main', my: 5, fontWeight: 'light'  }} variant="h2">DIGITAL SLR </Typography>
            {
                !products.length && <CircularProgress />
            }
            <hr/>
            <Grid sx={{my:3}} container spacing={2}>
                
                    {
                        products?.slice(0,6).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                
            </Grid>
        </Container>
    );
};

export default Products;