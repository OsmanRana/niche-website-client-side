import { CircularProgress, Container, Grid } from '@mui/material';
import React from 'react';
import useProductCollection from '../../../hooks/useProductCollection';
import Product from './Product';

const Products = () => {
    const { products } = useProductCollection()
    return (
        <Container>
            <h2>This is Products: {products.length}</h2>
            {
                !products.length && <CircularProgress />
            }
            <Grid container spacing={2}>
                
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