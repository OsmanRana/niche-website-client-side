import { CircularProgress, Container, Grid } from '@mui/material';
import React from 'react';
import useProductCollection from '../../hooks/useProductCollection';
import Product from '../Home/Products/Product';

const Explore = () => {
    const { products } = useProductCollection()
    return (
        <div>
            
            <Container>
                <h2>This is Products: {products.length}</h2>
                {
                    !products.length && <CircularProgress />
                }
                <Grid container spacing={2}>

                    {
                        products?.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Explore;