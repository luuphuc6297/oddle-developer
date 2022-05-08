import { Box } from '@mui/material';
import { SideBar } from 'components';
import React from 'react';

interface IUserRepositories {
    children?: any;
}

const UserRepositories = ({ children }: IUserRepositories) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <SideBar />
            <Box>This is repositories list</Box>
        </Box>
    );
};

export default UserRepositories;
