import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, PaginationParams, Repository } from 'models';

export interface RepositoryState {
    loading: boolean;
    list: Repository[];
    filter: ListParams;
    pagination: PaginationParams;
}

const initialState: RepositoryState = {
    loading: false,
    list: [],
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

const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {
        fetchRepositoryList(state, action: PayloadAction<ListParams>) {
            state.loading = true;
        },
        fetchRepositoryListSuccess(state, action: PayloadAction<ListResponse<Repository>>) {
            state.list = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
        },
        fetchRepositoryListFailed(state) {
            state.loading = false;
        },
        setFilter(state, action: PayloadAction<ListParams>) {
            state.filter = action.payload;
        },
        setFilterWithDebounce(state, action: PayloadAction<ListParams>) {},
    },
});

// Actions
export const repositoryActions = repositorySlice.actions;

export const selectRepositoryList = (state: RootState) => state.repository.list;
export const selectRepositoryLoading = (state: RootState) => state.repository.loading;
export const selectRepositoryFilter = (state: RootState) => state.repository.filter;
export const selectRepositoryPagination = (state: RootState) => state.repository.pagination;
//Reducer
const repositoryReducer = repositorySlice.reducer;
export default repositoryReducer;
