import { Box, Container } from '@mui/material';
import { ResponsiveAppBar } from 'components';
import React from 'react';
import { Outlet } from 'react-router-dom';
interface IMainLayout {
    children?: any;
}

const MainLayout = ({ children }: IMainLayout) => {
    return (
        <React.Fragment>
            <Box>
                <ResponsiveAppBar />
                <Container>{children}</Container>
            </Box>
            <Outlet />
        </React.Fragment>
    );
};

export default MainLayout;
