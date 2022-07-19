import { createActionTypes } from '../utils';

export const AUTH = createActionTypes('AUTH', [    
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILED'
]);

export const USER = createActionTypes('USER', [
    'GET_PROFILE_REQUEST',
    'GET_PROFILE_SUCCESS',
    'GET_PROFILE_FAILED',
    'UPDATE_PROFILE_REQUEST',
    'UPDATE_PROFILE_SUCCESS',
    'UPDATE_PROFILE_FAILED',
    'UPLOAD_AVATAR_REQUEST',
    'UPLOAD_AVATAR_SUCCESS',
    'UPLOAD_AVATAR_FAILED',
    'GET_AVATAR_REQUEST',
    'GET_AVATAR_SUCCESS',
    'GET_AVATAR_FAILED',
]);

export const CONTACT = createActionTypes('CONTACT', [
    'GET_CONTACT_REQUEST',
    'GET_CONTACT_SUCCESS',
    'GET_CONTACT_FAILED',
])

export const MEMBER = createActionTypes('MEMBER', [
    'POST_MEMBER_REQUEST',
    'POST_MEMBER_SUCCESS',
    'POST_MEMBER_FAILED',
    'GET_MEMBERS_REQUEST',
    'GET_MEMBERS_SUCCESS',
    'GET_MEMBERS_FAILED',
    'DELETE_MEMBER_REQUEST',
    'DELETE_MEMBER_SUCCESS',
    'DELETE_MEMBER_FAILED',
])
