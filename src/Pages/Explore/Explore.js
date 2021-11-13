import { CircularProgress, Container, Grid } from '@mui/material';
import React from 'react';
import useProductCollection from '../../hooks/useProductCollection';
import HomeBanner from '../Home/Banner/HomeBanner';
import Product from '../Home/Products/Product';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

const Explore = () => {
    const { products } = useProductCollection()
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Container>
                <ThemeProvider theme={theme}>
                    <Typography sx={{ color: 'info.main', my: 5 }} variant="h2">EXPLORE THE WORLD <br/>OF DIGITAL SLR</Typography>
                </ThemeProvider>
                <hr/>
                {
                    !products.length && <CircularProgress />
                }
                <Grid sx={{my:3}} container spacing={2}>

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