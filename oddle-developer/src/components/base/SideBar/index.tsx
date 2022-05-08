import { Avatar, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

interface ISideBar {
    userName?: string;
    avatar?: string;
}
const SideBarWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
    textAlign: 'left',
    marginRight: 32,
}));

const SideBarContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
});

const StyledAvatar = styled(Avatar)({
    width: 260,
    height: 260,
});

const StyledEditProfileBtn = styled(Button)({
    width: '100%',
    height: 32,
    textTransform: 'none',
    border: '1px solid rgba(27, 31, 36, 0.15)',
    borderRadius: 8,
});

const UserName = styled(Typography)(({ theme }) => ({
    fontSize: '1.25rem',
}));

export const SideBar = ({ userName, avatar }: ISideBar) => {
    return (
        <SideBarWrapper>
            <SideBarContainer>
                <StyledAvatar src={avatar} />
                <UserName>{userName}</UserName>
                <StyledEditProfileBtn>Edit profile</StyledEditProfileBtn>
            </SideBarContainer>
        </SideBarWrapper>
    );
};
