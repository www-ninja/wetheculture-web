import { CONTACT as ACTION_HEADER } from './types';

export const getContactRequest = () => ({
    type: ACTION_HEADER.GET_CONTACT_REQUEST,
});

export const getContactSuccess = (data) => ({
    type: ACTION_HEADER.GET_CONTACT_SUCCESS,
    payload: data
});

export const getContactFailed = (data) => ({
    type: ACTION_HEADER.GET_CONTACT_FAILED,
    payload: data
});
