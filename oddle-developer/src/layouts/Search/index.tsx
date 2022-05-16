import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, FormControl, Grid, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import { BootstrapBtn, CustomCaption, PageTitle } from 'components';
import { ListParams } from 'models';
import React, { ChangeEvent } from 'react';

export interface ISearchUser {
    filter: ListParams;
    onChange?: (newFilter: ListParams) => void;
    onSearchChange?: (newFilter: ListParams) => void;
}

const SearchLayout = ({ filter, onChange, onSearchChange }: ISearchUser) => {
    const searchRef = React.useRef<HTMLInputElement>();

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!onSearchChange) return;

        const newFilter: ListParams = {
            ...filter,
            username_like: e.target.value,
            _page: 1,
        };
        onSearchChange(newFilter);
    };

    const handleSortChange = (e: SelectChangeEvent) => {
        if (!onChange) return;

        const value = e.target.value;
        const [_sort, _order] = (value as string).split('.');
        const newFilter: ListParams = {
            ...filter,
            _sort: _sort || undefined,
            _order: (_order as 'asc' | 'desc') || undefined,
        };
        onChange(newFilter);
    };

    const handleClearFilter = () => {
        if (!onChange) return;

        const newFilter: ListParams = {
            ...filter,
            _page: 1,
            _sort: undefined,
            _order: undefined,
            username_like: undefined,
        };
        onChange(newFilter);
        if (searchRef.current) {
            searchRef.current.value = '';
        }
    };

    return (
        <Box>
            <PageTitle>Find the user you need.</PageTitle>
            <Grid container spacing={3} justifyContent="space-between">
                <Grid item xs={12} md={8}>
                    <CustomCaption>Search by username</CustomCaption>
                    <FormControl fullWidth variant="outlined" size="small">
                        <OutlinedInput
                            id="searchByUserName"
                            defaultValue={filter.username_like}
                            onChange={handleSearchChange}
                            inputRef={searchRef}
                            endAdornment={<SearchOutlinedIcon />}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={2}>
                    <FormControl variant="outlined" size="small" fullWidth>
                        <CustomCaption>Sort</CustomCaption>
                        <Select
                            value={filter?._sort ? `${filter?._sort}.${filter?._order}` : ''}
                            onChange={handleSortChange}
                        >
                            <MenuItem value="">
                                <em>No sort</em>
                            </MenuItem>

                            <MenuItem value="name.asc">Name ASC</MenuItem>
                            <MenuItem value="name.desc">Name DESC</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4} lg={1} alignItems="flex-end" style={{ display: 'flex' }}>
                    <BootstrapBtn onClick={handleClearFilter}>Clear</BootstrapBtn>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SearchLayout;
