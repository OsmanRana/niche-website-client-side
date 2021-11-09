import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
    }
    return (
        <Container sx={{ p: 0 }}>
            <Typography sx={{ color: 'text.secondary', mt: 5, mb: 3 }} variant="h6" gutterBottom component="div">LOGIN</Typography>
            <form
                onSubmit={handleOnSubmit}
            >
                <Grid container>
                    <Grid xs={1} md={2}>

                    </Grid>
                    <Grid xs={10} md={8}>
                        <TextField
                            sx={{ width: 1 }}
                            id="outlined-basic-email"
                            label="Your Email Please"
                            name="email"
                            type="email"
                            variant="outlined" />
                        <TextField
                            sx={{ width: 1, my: 3 }}
                            id="outlined-basic-password"
                            label="Your Password Please"
                            name="password"
                            type="password"
                            variant="outlined" />
                    </Grid>
                    <Grid xs={1} md={2} sx={{ pl: 0 }}>

                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" >Login</Button>
            </form>
            <NavLink to="/register" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'info.main', textAlign: 'center', my: 3 }} variant="h6" gutterBottom component="div">NEW USER? PLEASE REGISTER</Typography></NavLink>
        </Container>
    );
};

export default Login;