import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import { Box, Button, Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import moment from 'moment';
import React from 'react';
interface RepositoryCardProps {
    name: string;
    status?: string;
    language?: string;
    description?: string;
    updatedAt?: number;
}

const StyledRepositoryCard = styled(Card)({
    width: 752,
    padding: 8,
    display: 'flex',
    border: 'none',
    borderRadius: 0,
    borderBottom: '1px solid rgba(12, 25, 45, 0.05)',
    justifyContent: 'space-between',
    boxShadow: 'none',
    '&:hover': {
        transform: 'translateY(-10px)',
        transition: 'transform 550ms',
    },
});

const Name = styled(Button)(({ theme }) => ({
    lineHeight: '24px',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    textDecoration: 'none',
    textTransform: 'lowercase',
    padding: 0,
    marginRight: 32,
    marginBottom: 8,
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.grey[500],
    },
}));

const Status = styled(Typography)(({ theme }) => ({
    width: 50,
    fontSize: 12,
    border: '1px solid rgba(12, 25, 45, 0.2)',
    borderRadius: 8,
    padding: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Description = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.grey[400],
    textAlign: 'left',
    marginBottom: 8,
}));

const Language = styled(Typography)(({ theme }) => ({
    fontSize: 15,
    display: 'flex',
    alignItems: 'center',
    marginRight: 32,
    color: '#546e7a',
}));

const LastUpdate = styled(Typography)(({ theme }) => ({
    fontSize: 14,
}));
const InfoBox = styled(Box)({});

const TopInfoBox = styled(Box)({
    display: 'flex',
});

const BotInfoBox = styled(Box)({
    display: 'flex',
});

const StyledIcon = styled(TerminalOutlinedIcon)({
    opacity: 0.5,
    marginRight: 4,
    color: 'rgba(15, 25, 45, 0.5)',
});
export const RepositoryCard = ({ name, status, language, description, updatedAt }: RepositoryCardProps) => {
    const formatDate = moment(updatedAt, 'YYYYMMDD').fromNow();

    return (
        <StyledRepositoryCard>
            <InfoBox>
                <TopInfoBox>
                    <Name color="primary">{name}</Name>
                    <Status>{status}</Status>
                </TopInfoBox>
                <Description>{description}</Description>
                <BotInfoBox>
                    <Language>
                        <StyledIcon />
                        {language}
                    </Language>
                    <LastUpdate>Updated: {formatDate}</LastUpdate>
                </BotInfoBox>
            </InfoBox>
        </StyledRepositoryCard>
    );
};
