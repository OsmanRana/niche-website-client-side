import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading || !admin) {
        return <div className="text-center"><CircularProgress /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? children :
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location }
                        }}
                    />
            }
        >

        </Route>
    );
};

export default AdminRoute;