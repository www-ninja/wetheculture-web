import { put, takeLatest, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { adminLogin } from '../services/api'

import { authActions, types } from '../actions';

const {    
    loginSuccess,
    loginFailed
} = authActions;

const { AUTH: ACTION_HEADER } = types;

function* requestLogin(action) {
    try {
        const data = yield adminLogin(action.payload);
        yield put(loginSuccess(data));
    } catch (error) {
        yield put(loginFailed(error.message));
        toastr.error('Invalid Credentials');
    }
}

function* authSaga() {
    yield all([
        yield takeLatest(ACTION_HEADER.LOGIN_REQUEST, requestLogin),
    ]);
}

export default authSaga;
