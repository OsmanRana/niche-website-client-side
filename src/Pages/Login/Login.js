import { Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>This is login</h2>
            <NavLink to="/register" style={{textDecoration: 'none'}}><Typography  variant="h6" gutterBottom>NEW USER? PLEASE REGISTER</Typography></NavLink>
        </div>
    );
};

export default Login;