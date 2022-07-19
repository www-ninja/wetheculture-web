import { put, takeLatest, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { getContacts } from '../services/api'

import { contactActions, types } from '../actions';

const {    
    getContactFailed,
    getContactSuccess
} = contactActions;

const { CONTACT: ACTION_HEADER } = types;

function* getContactRequest(action) {
    try {
        const data = yield getContacts();
        yield put(getContactSuccess(data));
    } catch (error) {
        yield put(getContactFailed(error.message));
        toastr.error('Fetching contact api error!');
    }
}

function* contactSaga() {
    yield all([
        yield takeLatest(ACTION_HEADER.GET_CONTACT_REQUEST, getContactRequest),
    ]);
}

export default contactSaga;
