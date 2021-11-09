import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>This is Register</h2>
            <NavLink to="/login" style={{textDecoration: 'none'}}><Typography variant="h6" gutterBottom>ALREADY REGISTERED? PLEASE SIGN IN</Typography></NavLink>

        </div>
    );
};

export default Register;