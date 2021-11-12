import { Button, TextField, Box, Alert, Typography, Container } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    };
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('https://mighty-bastion-98054.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
                else {
                    alert('This user does not exist, please add a valid users email. Thanks')
                    setEmail('')
                }
            })
        e.preventDefault();
    };
    return (
        <Container sx={{ mt: 10 }}>
            <Box sx={{ borderRadius: 5, my: 3, boxShadow: 3 }}>
                <Typography sx={{ color: 'info.main', py: 3 }} variant="h3" gutterBottom component="div">
                    Make an Admin
                </Typography>
            </Box>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '100%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <br />
                <Button sx={{ my: 3, width: '100%' }} type="submit" variant="contained">Make an Admin</Button>
                {
                    success && <Alert severity="success">Made an Admin successfully</Alert>
                }
            </form>
        </Container>
    );
};

export default MakeAdmin;