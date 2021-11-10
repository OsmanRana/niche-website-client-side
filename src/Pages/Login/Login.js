import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    };

    const handleLoginSubmit = e => {
        e.preventDefault();
    }
    return (
        <Container sx={{ p: 0 }}>
            <Typography sx={{ color: 'text.secondary', mt: 5, mb: 3 }} variant="h6" gutterBottom component="div">LOGIN</Typography>
            <form
                onSubmit={handleLoginSubmit}
            >
                <Grid container>
                    <Grid item xs={1} md={2}>

                    </Grid>
                    <Grid item xs={10} md={8}>
                        <TextField
                            sx={{ width: 1 }}
                            id="outlined-basic-email"
                            label="Your Email Please"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            required
                            variant="outlined" />

                        <TextField
                            sx={{ width: 1, my: 3 }}
                            id="outlined-basic-password"
                            label="Your Password Please"
                            name="password"
                            type="password"
                            onBlur={handleOnBlur}
                            required
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={1} md={2} sx={{ pl: 0 }}>

                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" >Login</Button>
            </form>
            <NavLink to="/register" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'info.main', textAlign: 'center', my: 3 }} variant="h6" gutterBottom component="div">NEW USER? PLEASE REGISTER</Typography></NavLink>
        </Container>
    );
};

export default Login;