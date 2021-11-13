import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <Box sx={{ bgcolor: 'black', height: '30px', my: 5 }}></Box>
        <Container>
            
            <Grid container spacing={2} sx={{pl: 5}}>
                <Grid item xs={6} md={6} lg={3}>
                    <Typography sx={{ textAlign: 'left' }} variant="overline" display="block" gutterBottom>
                        COMPANY INFO
                    </Typography>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        About
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Return Policy
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Contact Us
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Terms & Conditions
                    </Typography></Link>
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                    <Typography sx={{ textAlign: 'left' }} variant="overline" display="block" gutterBottom>
                        SERVICES
                    </Typography>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Classes & Events
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Service Bureau
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Warranty Registration
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Trade In / Sell
                    </Typography></Link>
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                    <Typography sx={{ textAlign: 'left' }} variant="overline" display="block" gutterBottom>
                        FEATURED
                    </Typography>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Pre-Owned Deal Of The Day
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Rebates & Promotions
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Photo Blog
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        eGift Cards
                    </Typography></Link>
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                    <Typography sx={{ textAlign: 'left' }} variant="overline" display="block" gutterBottom>
                        FOLLOW US
                    </Typography>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Facebook
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Instagram
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Youtube
                    </Typography></Link>
                    <Link to='/' style={{ textDecoration: 'none' }}><Typography sx={{ textAlign: 'left' }} variant="caption" display="block" gutterBottom>
                        Twitter
                    </Typography></Link>
                </Grid>
            </Grid>
            
        </Container>
        <Box sx={{ bgcolor: 'black', height: '30px', my: 5, color:'white' }}><small>copy right @ Md Osman Farooque @ 01765088482</small> </Box>
        </>
    );
};

export default Footer;