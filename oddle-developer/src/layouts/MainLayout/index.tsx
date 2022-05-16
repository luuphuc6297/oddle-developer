import { Box } from '@mui/material';
import { ResponsiveAppBar } from 'components';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <React.Fragment>
            <Box>
                <ResponsiveAppBar />
            </Box>
            <Outlet />
        </React.Fragment>
    );
};

export default MainLayout;
