import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import contactSaga from './contactSaga';
import memberSaga from './memberSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(contactSaga),
        fork(memberSaga),
        fork(userSaga),
    ]);
}
