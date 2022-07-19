import { MEMBER as ACTION_HEADER } from './types';


export const postMemberRequest = (data, callback) => ({
    type: ACTION_HEADER.POST_MEMBER_REQUEST,
    payload: data,
    callback
})

export const postMemberSuccess = (data) => ({
    type: ACTION_HEADER.POST_MEMBER_SUCCESS,
    payload: data
})

export const postMemberFailed = (data) => ({
    type: ACTION_HEADER.POST_MEMBER_FAILED,
    payload: data
})

export const getMembersRequest = () => ({
    type: ACTION_HEADER.GET_MEMBERS_REQUEST
})

export const getMembersSuccess = (data) => ({
    type: ACTION_HEADER.GET_MEMBERS_SUCCESS,
    payload: data
})

export const getMembersFailed = (data) => ({
    type: ACTION_HEADER.GET_MEMBERS_FAILED,
    payload: data
})

export const deleteMemberRequest = (data, callback) => ({
    type: ACTION_HEADER.DELETE_MEMBER_REQUEST,
    payload: data,
    callback
})

export const deleteMemberSuccess = (id) => ({
    type: ACTION_HEADER.DELETE_MEMBER_SUCCESS,
    payload: { id }
})

export const deleteMemberFailed = (data) => ({
    type: ACTION_HEADER.DELETE_MEMBER_FAILED,
    payload: data
})
