import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import MakeAdmin from '../AdminDashboard/MakeAdmin';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAllOrders from '../AdminDashboard/ManageAllOrders';
import AddProduct from '../AdminDashboard/AddProduct';
import ManageAllProducts from '../AdminDashboard/ManageAllProducts';
import DashboardHome from '../UserDashboard/DashboardHome';
import Logout from '../UserDashboard/Logout';

const drawerWidth = 240;

const UserDashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <NavLink to="/" style={{ textDecoration: 'none' }} >
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}`} style={{ textDecoration: 'none' }} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>
                    <ListItem>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>Dashboard</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}/manageAllOrders`} style={{ textDecoration: 'none' }} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>
                    <ListItem>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>Manage All Orders</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}/addProduct`} style={{ textDecoration: 'none' }} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>
                    <ListItem>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText>Add a Product</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>
                    <ListItem>
                        <ListItemIcon>
                            < AdminPanelSettingsIcon />
                        </ListItemIcon>
                        <ListItemText>Make an Admin</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}/manageAllProducts`} style={{ textDecoration: 'none' }} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>
                    <ListItem>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>Manage Products</ListItemText>
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}/logout`} style={{ textDecoration: 'none' }} activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                }}>
                    <ListItem>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText>Log Out</ListItemText>
                    </ListItem>
                </NavLink>
            </List>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

                    {/* Admin Routes */}
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageAllProducts`}>
                        <ManageAllProducts></ManageAllProducts>
                    </Route>
                    <Route path={`${path}/logout`}>
                        <Logout></Logout>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

export default UserDashboard;