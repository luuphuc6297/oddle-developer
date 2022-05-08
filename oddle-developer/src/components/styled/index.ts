import { styled } from '@mui/system';
import { FormHelperText, Typography } from '@mui/material';

export const CustomCaption = styled(Typography)(({ theme }) => ({
    lineHeight: '24px',
    fontSize: 16,
    marginBottom: 24,
    color: theme.palette.grey[500],
    textAlign: 'left',
}));

export const SmallCaption = styled(Typography)({
    fontSize: 12,
});

export const Error = styled(FormHelperText)({
    margin: '0 0 12px 0',
    fontWeight: 800,
});
