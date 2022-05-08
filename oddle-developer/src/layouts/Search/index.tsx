import { Box, FormControl, OutlinedInput } from '@mui/material';
import { BootstrapBtn } from 'components';
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
            <FormControl fullWidth variant="outlined" size="small">
                <OutlinedInput
                    id="searchByUserName"
                    defaultValue={filter.username_like}
                    onChange={handleSearchChange}
                    inputRef={searchRef}
                />
            </FormControl>
            <BootstrapBtn onClick={handleClearFilter}>Clear</BootstrapBtn>
        </Box>
    );
};

export default SearchLayout;
