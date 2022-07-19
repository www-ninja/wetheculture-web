import { put, takeLatest, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import {
    getProfile,
    updateProfile,
    uploadAvatar,
    getAvatar
} from '../services/api'

import { userActions, types } from '../actions';

const {
    getProfileSuccess,
    getProfileFailed,
    updateProfileSuccess,
    updateProfileFailed,
    uploadAvatarSuccess,
    uploadAvatarFailed,
    getAvatarFailed,
    getAvatarSuccess,
} = userActions;

const { USER: ACTION_HEADER } = types;

function* getProfileRequest(action) {
    try {
        const data = yield getProfile();
        yield put(getProfileSuccess(data));
    } catch (error) {
        yield put(getProfileFailed(error.message));
        toastr.error(error.message);
    }
}

function* getAvatarRequest(action) {
    try {
        const data = yield getAvatar();
        yield put(getAvatarSuccess(data));
    } catch (error) {
        yield put(getAvatarFailed(error.message));
        toastr.error(error.message);
    }
}

function* updateProfileRequest(action) {
    try {
        const data = yield updateProfile(action.payload);
        yield put(updateProfileSuccess(data));
    } catch (error) {
        yield put(updateProfileFailed(error.message));
        toastr.error(error.message);
    }
}

function* uploadAvatarRequest(action) {
    try {
        let formData = new FormData();
        formData.append('file', action.payload);
        const data = yield uploadAvatar(formData);
        yield put(uploadAvatarSuccess(data));
    } catch (error) {
        yield put(uploadAvatarFailed(error.message));
        toastr.error(error.message);
    }
}

function* userSaga() {
    yield all([
        yield takeLatest(ACTION_HEADER.GET_PROFILE_REQUEST, getProfileRequest),
        yield takeLatest(ACTION_HEADER.UPDATE_PROFILE_REQUEST, updateProfileRequest),
        yield takeLatest(ACTION_HEADER.UPLOAD_AVATAR_REQUEST, uploadAvatarRequest),
        yield takeLatest(ACTION_HEADER.GET_AVATAR_REQUEST, getAvatarRequest)
    ]);
}

export default userSaga;
