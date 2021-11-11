import { Button, TextField, Box, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    };
    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
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
                else{
                    alert('This user does not exist, please add a valid users email. Thanks')
                    setEmail('')
                }
            })
        e.preventDefault();
    };
    return (
        <Box sx={{ mt: 10 }}>

            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <br />
                <Button sx={{ my: 3 }} type="submit" variant="contained">Make an Admin</Button>
                {
                    success && <Alert severity="success">Made an Admin successfully</Alert>
                }
            </form>
        </Box>
    );
};

export default MakeAdmin;