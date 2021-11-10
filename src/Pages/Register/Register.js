import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { newUserRegistration, isLoading, authError, user, handleGoogleSignIn } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(newLoginData)
    };
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not matched')
        }
        newUserRegistration(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    };
    const googleSignIn =()=>{
        handleGoogleSignIn(history);
    };
    return (
        <Container sx={{ p: 0 }}>
            <Typography sx={{ color: 'text.secondary', mt: 5, mb: 3 }} variant="h6" gutterBottom component="div">REGISTER</Typography>
            <form
                onSubmit={handleRegisterSubmit}
            >
                <Grid container>
                    <Grid item xs={1} md={2}>

                    </Grid>
                    <Grid item xs={10} md={8} sx={{ my: 'auto', boxShadow: 1, p: 4, borderRadius: 5 }}>
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
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                        {
                            user?.email && <Alert severity="success">Registered successfully!</Alert>
                        }
                    </Grid>
                    <Grid item xs={1} md={2} sx={{ pl: 0 }}>

                    </Grid>

                </Grid>
                <Button sx={{ mt: 3 }} type="submit" variant="contained" >Register</Button>
            </form>
            <Grid container>
                <Grid item md={2} sx={{ pl: 0 }}>

                </Grid>
                <Grid item xs={12} md={4}>
                    <NavLink to="/login" style={{ textDecoration: 'none' }}><Button sx={{ color: 'info.main', textAlign: 'center', my: 3, boxShadow: 1, px: 5, py:3, borderRadius: 5 }} >ALREADY REGISTERED? PLEASE LOGIN</Button></NavLink>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button onClick={googleSignIn} sx={{ my: 3, boxShadow: 1, px: 10, py:3, borderRadius: 5 }} variant="text">Google Login</Button>
                </Grid>
                <Grid item md={2} sx={{ pl: 0 }}>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;