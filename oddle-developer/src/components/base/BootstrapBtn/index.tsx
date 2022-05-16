import { Button } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface IBootstrapBtn {
    children?: any;
    onClick?: () => void;
}

const StyledBootstrapBtn = styled(Button)({
    textTransform: 'none',
    width: '100%',
});

export const BootstrapBtn = ({ children, onClick, ...props }: IBootstrapBtn) => {
    return (
        <StyledBootstrapBtn {...props} onClick={onClick} variant="outlined">
            {children}
        </StyledBootstrapBtn>
    );
};
