import { Button, Container } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Logout = () => {
    const {logOut} = useAuth();
    const history = useHistory();

    const handleLogOut = ()=>{
        logOut();
        history.push('/')
    }

    return (
        <Container>
            <Button onClick={handleLogOut} variant="contained">Log Out</Button>
        </Container>
    );
};

export default Logout;