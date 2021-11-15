import { CircularProgress } from '@mui/material';
import React from 'react';
import {
    Route,
    Redirect,
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, adminLoading, admin } = useAuth();
    if (adminLoading) {
        return <CircularProgress color="warning" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;