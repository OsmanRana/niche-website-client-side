import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center"><CircularProgress /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? children :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
            }
        >

        </Route>
    );
};

export default UserRoute;