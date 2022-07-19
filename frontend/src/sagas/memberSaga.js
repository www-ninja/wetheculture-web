import { put, takeLatest, all } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';
import { getTeamMembers, createTeamMember, deleteTeamMember } from '../services/api'

import { memberActions, types } from '../actions';


const {    
    getMembersFailed,
    getMembersSuccess,
    postMemberFailed,
    postMemberSuccess,
    deleteMemberFailed,
    deleteMemberSuccess
} = memberActions;

const { MEMBER: ACTION_HEADER } = types;

function* getMembersRequest(action) {
    try {
        const res = yield getTeamMembers();
        yield put(getMembersSuccess(res.data));
    } catch (error) {
        yield put(getMembersFailed(error.message));
        toastr.error('Fetching contact api error!');
    }
}

function* postMemberRequest(action) {
    const { file, name, email, team, role } = action.payload
    try {
        let formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('team', team);
        formData.append('role', role);
        const res = yield createTeamMember(formData);
        yield put(postMemberSuccess(res.data));
        action.callback();
    } catch (error) {
        yield put(postMemberFailed(error.message));
        toastr.error('Fetching contact api error!');
        action.callback();
    }
}

function* deleteMemberRequest(action) {
    const { id } = action.payload
    try {
        const res = yield deleteTeamMember(id);
        yield put(deleteMemberSuccess(id));
        action.callback();
    } catch (error) {
        yield put(deleteMemberFailed(error.message));
        toastr.error('Fetching contact api error!');
        action.callback();
    }
}

function* memberSaga() {
    yield all([
        yield takeLatest(ACTION_HEADER.GET_MEMBERS_REQUEST, getMembersRequest),
        yield takeLatest(ACTION_HEADER.POST_MEMBER_REQUEST, postMemberRequest),
        yield takeLatest(ACTION_HEADER.DELETE_MEMBER_REQUEST, deleteMemberRequest),
    ]);
}

export default memberSaga;
