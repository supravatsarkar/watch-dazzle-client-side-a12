import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const DashboardInner = () => {
    const { user } = useAuth()
    return (
        <div>
            <h3>User Information</h3>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.email}</p>
        </div>
    );
};

export default DashboardInner;