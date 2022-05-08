import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, PaginationParams, User } from 'models';

export interface UserState {
    loading: boolean;
    list: User[];
    user: User;
    filter: ListParams;
    pagination: PaginationParams;
}

const initialState: UserState = {
    loading: false,
    list: [],
    user: {
        id: '',
        name: '',
        username: '',
    },
    filter: {
        _page: 1,
        _limit: 5,
    },
    pagination: {
        _page: 1,
        _limit: 5,
        _totalRows: 5,
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserList(state, action: PayloadAction<ListParams>) {
            state.loading = true;
        },
        fetchUserListSuccess(state, action: PayloadAction<ListResponse<User>>) {
            console.log('action.payload__user', action.payload);
            state.list = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
        },
        fetchUserListFailed(state) {
            state.loading = false;
        },
        fetchUserByUserName(state, action: PayloadAction<string>) {
            state.loading = true;
        },
        fetchUserByUserNameSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.loading = false;
        },
        fetchUserByUserNameFailed(state) {
            state.loading = false;
        },
        setFilter(state, action: PayloadAction<ListParams>) {
            state.filter = action.payload;
        },
        setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
    },
});

// Actions
export const userActions = userSlice.actions;

export const selectUserList = (state: RootState) => state.user.list;
export const selectUser = (state: RootState) => state.user.user;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserFilter = (state: RootState) => state.user.filter;
export const selectUserPagination = (state: RootState) => state.user.pagination;
//Reducer
const userReducer = userSlice.reducer;

export default userReducer;
