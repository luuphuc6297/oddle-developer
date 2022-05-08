import { all } from 'redux-saga/effects';
import userSaga from 'redux/saga/user';
import repository from 'redux/saga/repository';

export default function* rootSaga() {
    yield all([userSaga(), repository()]);
}
