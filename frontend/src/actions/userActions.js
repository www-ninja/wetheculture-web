import { USER as ACTION_HEADER } from './types';

export const getProfileRequest = () => ({
    type: ACTION_HEADER.GET_PROFILE_REQUEST,
})

export const getProfileSuccess = ({ user }) => ({
    type: ACTION_HEADER.GET_PROFILE_SUCCESS,
    payload: user,
})

export const getProfileFailed = (error) => ({
    type: ACTION_HEADER.GET_PROFILE_FAILED,
    payload: error
})

export const updateProfileRequest = (data) => ({
    type: ACTION_HEADER.UPDATE_PROFILE_REQUEST,
    payload: data
})

export const updateProfileSuccess = (data) => ({
    type: ACTION_HEADER.UPDATE_PROFILE_SUCCESS,
    payload: data,
})

export const updateProfileFailed = (error) => ({
    type: ACTION_HEADER.UPDATE_PROFILE_FAILED,
    payload: error
})

export const uploadAvatarRequest = (data) => ({
    type: ACTION_HEADER.UPLOAD_AVATAR_REQUEST,
    payload: data,
})

export const uploadAvatarSuccess = (data) => ({
    type: ACTION_HEADER.UPLOAD_AVATAR_SUCCESS,
    payload: data,
})

export const uploadAvatarFailed = (error) => ({
    type: ACTION_HEADER.UPLOAD_AVATAR_FAILED,
    payload: error,
})

export const getAvatarRequest = () => ({
    type: ACTION_HEADER.GET_AVATAR_REQUEST
})

export const getAvatarSuccess = (data) => ({
    type: ACTION_HEADER.GET_AVATAR_SUCCESS,
    payload: data,
})

export const getAvatarFailed = (error) => ({
    type: ACTION_HEADER.GET_AVATAR_FAILED,
    payload: error
})

export const updateSettingRequest = (data) => ({
    type: ACTION_HEADER.UPDATE_SETTING_REQUEST,
    payload: data
})

export const updateSettingSuccess = (data) => ({
    type: ACTION_HEADER.UPDATE_SETTING_SUCCESS,
    payload: data,
})

export const updateSettingFailed = (error) => ({
    type: ACTION_HEADER.UPDATE_SETTING_FAILED,
    payload: error
})
