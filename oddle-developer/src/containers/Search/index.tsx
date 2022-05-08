import { Box, Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RecipeReviewCard } from 'components';
import { SearchLayout } from 'layouts';
import { ListParams } from 'models';
import React from 'react';
import { selectUserFilter, selectUserList, selectUserPagination, userActions } from 'redux/slices/user';

const SearchContainer = () => {
    const filter = useAppSelector(selectUserFilter);
    const userList = useAppSelector(selectUserList);
    const pagination = useAppSelector(selectUserPagination);

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(userActions.fetchUserList(filter));
    }, [dispatch, filter]);

    const handlePageChange = (e: any, page: number) => {
        dispatch(
            userActions.setFilter({
                ...filter,
                _page: page,
            })
        );
    };

    const handleSearchChange = (newFilter: ListParams) => {
        dispatch(userActions.setFilterWithDebounce(newFilter));
    };

    const handleFilterChange = (newFilter: ListParams) => {
        dispatch(userActions.setFilter(newFilter));
    };

    return (
        <>
            <SearchLayout filter={filter} onChange={handleFilterChange} onSearchChange={handleSearchChange} />
            <Box>
                {userList &&
                    userList?.map((user) => (
                        <RecipeReviewCard
                            key={user?.id}
                            name={user?.name}
                            userName={user?.username}
                            avatar={user?.avatar}
                            description={user?.description}
                            location={user?.location}
                        />
                    ))}
            </Box>
            <Pagination
                color="primary"
                count={Math.ceil(pagination?._totalRows / pagination?._limit)}
                page={pagination?._page}
                onChange={handlePageChange}
            />
        </>
    );
};

export default SearchContainer;
