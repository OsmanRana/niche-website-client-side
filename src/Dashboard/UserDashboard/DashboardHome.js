import { Container, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import useAuth from '../../hooks/useAuth'

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <Container>
            <Grid container spacing={2} style={{display: 'flex', alignItems: 'center'}}>
                <Grid item xs={12} sm={6}>
                    <img style={{ width: '100%' }} src="/welcome.jpg" alt="" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography sx={{fontWeight: 'bold', color: 'info.main'}} variant="h3" component="div" gutterBottom>
                    {user.displayName}
                    </Typography>
                    
                </Grid>

            </Grid>
        </Container>
    );
};

export default DashboardHome;