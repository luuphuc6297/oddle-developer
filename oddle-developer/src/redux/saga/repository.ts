import { PayloadAction } from '@reduxjs/toolkit';
import repositoryApi from 'apis/repositoryApi';
import { ListParams, ListResponse, Repository } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { repositoryActions } from 'redux/slices/repository';

function* fetchRepositoryList(action: PayloadAction<ListParams>) {
    try {
        console.log('action___', action.payload);
        const response: ListResponse<Repository> = yield call(repositoryApi.getAllRepoByUserId, action.payload);

        console.log('response____repository', response);
        yield put(repositoryActions.fetchRepositoryListSuccess(response));
    } catch (error) {
        console.log('Failed to fetch repository list', error);
        yield put(repositoryActions.fetchRepositoryListFailed());
    }
}

function* handleSearchDebounce(action: PayloadAction<ListParams>) {
    yield put(repositoryActions.setFilter(action.payload));
}

export default function* repositorySaga() {
    yield takeLatest(repositoryActions.fetchRepositoryList, fetchRepositoryList);
    yield debounce(500, repositoryActions.setFilterWithDebounce.type, handleSearchDebounce);
}
