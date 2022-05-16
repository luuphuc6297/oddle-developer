import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import * as React from 'react';
interface IUserCard {
    name: string;
    userName: string;
    avatar?: string;
    description?: string;
    location?: string;
    onDetail?: (userName: string) => void;
}
const StyledCard = styled(Card)({
    width: 752,
    borderRadius: 8,
    padding: 24,
    display: 'flex',
    boxShadow: '0 0 10px 0 rgb(95 125 149 / 30%)',
    justifyContent: 'space-between',
    marginBottom: 24,
    '&:hover': {
        transform: 'translateY(-10px)',
        transition: 'transform 550ms',
    },
});

const InfoBox = styled(Box)({
    display: 'flex',
});
const AvatarBox = styled(Box)({
    marginRight: 16,
});

const StyledCardContent = styled(CardContent)({
    padding: 0,
    '&:last-child': {
        paddingBottom: 0,
    },
});

const Name = styled(Button)(({ theme }) => ({
    lineHeight: '24px',
    fontSize: 20,
    color: '#0C192D',
    fontWeight: 'bold',
    textAlign: 'left',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.grey[500],
    },
}));

const UserName = styled(Typography)(({ theme }) => ({
    lineHeight: '24px',
    fontSize: 16,
    color: theme.palette.grey[500],
    textAlign: 'left',
    marginBottom: 8,
}));

const Description = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.grey[400],
    textAlign: 'left',
    marginBottom: 8,
}));

const Location = styled(Typography)(({ theme }) => ({
    fontSize: 14,
    color: theme.palette.grey[400],
    textAlign: 'left',
    marginBottom: 8,
    display: 'flex',
    alignItems: 'center',
}));

const FollowBtn = styled(Button)({
    width: 78,
    height: 26,
    fontSize: 12,
    borderColor: '#e6e6e6',
    textTransform: 'none',
    borderRadius: 4,
    color: '#bdbdbd',
});

export const RecipeReviewCard = ({ name, avatar, userName, description, location, onDetail }: IUserCard) => {
    return (
        <StyledCard>
            <InfoBox>
                <AvatarBox>
                    <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe" src={avatar} />
                </AvatarBox>
                <StyledCardContent>
                    <Name onClick={() => onDetail?.(userName)}>{name}</Name>
                    <UserName>{userName}</UserName>
                    <Description>{description}</Description>
                    <Location>
                        <LocationOnOutlinedIcon />
                        {location}
                    </Location>
                </StyledCardContent>
            </InfoBox>
            <FollowBtn variant="outlined">Follow</FollowBtn>
        </StyledCard>
    );
};
