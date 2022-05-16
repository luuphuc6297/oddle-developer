import { Box, Pagination, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RecipeReviewCard } from 'components';
import { SearchLayout } from 'layouts';
import { ListParams } from 'models';
import React from 'react';
import { selectUserFilter, selectUserList, selectUserPagination, userActions } from 'redux/slices/user';
import { history } from 'utils';

const StyledSearchContainer = styled(Box)({
    margin: '0 32px',
});

const StyledDivider = styled(Divider)({
    margin: '32px 0',
});
const StyledBox = styled(Box)({
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

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

    const handleDetailUser = async (userName: string) => {
        history.push(`/users/${userName}`);
    };

    return (
        <StyledSearchContainer>
            <SearchLayout filter={filter} onChange={handleFilterChange} onSearchChange={handleSearchChange} />
            <StyledDivider />
            <StyledBox>
                {userList &&
                    userList?.map((user) => (
                        <RecipeReviewCard
                            onDetail={handleDetailUser}
                            key={user?.id}
                            name={user?.name}
                            userName={user?.username}
                            avatar={user?.avatar}
                            description={user?.description}
                            location={user?.location}
                        />
                    ))}
            </StyledBox>
            <Box my={2} display="flex" justifyContent="center">
                <Pagination
                    color="primary"
                    count={Math.ceil(pagination?._totalRows / pagination?._limit)}
                    page={pagination?._page}
                    onChange={handlePageChange}
                />
            </Box>
        </StyledSearchContainer>
    );
};

export default SearchContainer;
