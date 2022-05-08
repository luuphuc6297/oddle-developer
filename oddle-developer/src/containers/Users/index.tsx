import React from 'react';
import { Outlet } from 'react-router-dom';

const UsersContainer = () => {
    return (
        <div>
            Users
            <Outlet />
        </div>
    );
};
export default UsersContainer;
