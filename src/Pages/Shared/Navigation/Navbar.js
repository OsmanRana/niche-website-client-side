import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavBar.css'

const Navbar = () => {
    const { user, logOut, admin } = useAuth();
    const handleLogOut = () => {
        logOut();
    };
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src='/canon_logo.png' alt=""/>
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-links'>
                            {
                                user?.email && <Typography>{user.displayName}</Typography>
                            }
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/explore'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                {
                                    user?.email && !admin && <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/userDashboard"><Button color="inherit">Dashboard</Button></NavLink>
                                }
                                {
                                    user?.email && admin && <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/adminDashboard"><Button color="inherit">Dashboard</Button></NavLink>
                                }
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/explore'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/explore"><Button color="inherit">Explore</Button></NavLink>
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/login'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                {
                                    user?.email ? <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button onClick={handleLogOut} color="inherit">Logout</Button></NavLink>
                                        :
                                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit">Login</Button></NavLink>
                                }
                            </Link>
                        </li>
                    </ul>



                </div>
            </nav>

        </>
    );
};

export default Navbar;