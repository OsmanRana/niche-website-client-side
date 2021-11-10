import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {newUserRegistration} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    };
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not matched')
        }
        newUserRegistration(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container sx={{ p: 0 }}>
            <Typography sx={{ color: 'text.secondary', mt: 5, mb: 3 }} variant="h6" gutterBottom component="div">REGISTER</Typography>
            <form
                onSubmit={handleRegisterSubmit}
            >
                <Grid container>
                    <Grid item xs={1} md={2}>

                    </Grid>
                    <Grid item xs={10} md={8}>
                        <TextField
                            sx={{ width: 1 }}
                            id="outlined-basic-name"
                            label="Your Full Name Please"
                            name="name"
                            type="name"
                            onBlur={handleOnBlur}
                            required
                            variant="outlined" />
                        <TextField
                            sx={{ width: 1, mt: 3 }}
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
                        <TextField
                            sx={{ width: 1, my: 3 }}
                            id="outlined-basic-password2"
                            label="Confirm password please"
                            name="password2"
                            type="password"
                            onBlur={handleOnBlur}
                            required
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={1} md={2} sx={{ pl: 0 }}>

                    </Grid>

                </Grid>
                <Button type="submit" variant="contained" >Register</Button>

            </form>
            <NavLink to="/login" style={{ textDecoration: 'none' }}><Typography sx={{ color: 'info.main', textAlign: 'center', my: 3 }} variant="h6" gutterBottom component="div">ALREADY REGISTERED?<br /> PLEASE LOGIN</Typography></NavLink>
        </Container>
    );
};

export default Register;