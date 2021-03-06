import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut, admin } = useAuth();
    const handleLogOut = () => {
        logOut();
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       
                        </Typography>
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></NavLink>
                        {
                            user?.email && <Typography>{user.displayName}</Typography>
                        }
                        {
                            user?.email && !admin && <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/userDashboard"><Button color="inherit">Dashboard</Button></NavLink>
                        }
                        {
                            user?.email && admin && <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/adminDashboard"><Button color="inherit">Dashboard</Button></NavLink>
                        }
                        {
                            user?.email ? <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button onClick={handleLogOut} color="inherit">Logout</Button></NavLink>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                        }

                    </Toolbar>
                </Container>
            </AppBar>

        </Box>
    );
};

export default Navigation;