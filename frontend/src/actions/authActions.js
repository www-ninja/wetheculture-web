import { AUTH as ACTION_HEADER } from './types';

export const loginRequest = (data) => ({
    type: ACTION_HEADER.LOGIN_REQUEST,
    payload: data
});

export const loginSuccess = (data) => ({
    type: ACTION_HEADER.LOGIN_SUCCESS,
    payload: data
});

export const loginFailed = (data) => ({
    type: ACTION_HEADER.LOGIN_FAILED,
    payload: data
});
