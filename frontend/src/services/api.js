import axios from 'axios';
import { API_BASE_URL } from '../utils';
export const registerContact = (data) => new Promise((resolve, reject) => {
    data.phone_number = data.phone_number.replaceAll("[^0-9]", "");

    axios.post(`${API_BASE_URL}/contact`, data)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.response.data.error);
        });
})

export const getContacts = () => new Promise((resolve, reject) => {
    axios.get(`${API_BASE_URL}/contact`)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.response.data.error);
        });
})

export const adminLogin = (data) => new Promise((resolve, reject) => {
    axios.post(`${API_BASE_URL}/auth/login`, data)
        .then(res => {
            resolve(res.data);
        })
        .catch(err => {
            reject(err.response.data.error);
        });
})

export const getProfile = () =>
    new Promise((resolve, reject) => {
        axios
            .get(`${API_BASE_URL}/users`)
            .then(res => resolve(res?.data))
            .catch(err => reject(err))
    });

export const updateProfile = (data) =>
    new Promise((resolve, reject) => {
        axios
            .put(`${API_BASE_URL}/users`, data)
            .then(res => resolve(res?.data))
            .catch(err => reject(err))
    });

export const uploadAvatar = (data) =>
    new Promise((resolve, reject) => {
        axios
            .post(`${API_BASE_URL}/users/upload-avatar`, data)
            .then(res => resolve(res?.data))
            .catch(err => reject(err))
    });

export const getAvatar = () =>
    new Promise((resolve, reject) => {
        axios
            .get(`${API_BASE_URL}/users/get-avatar`)
            .then(res => resolve(res?.data))
            .catch(err => reject(err))
    });


export const createTeamMember = (data) =>
    new Promise((resolve, reject) => {
        axios
            .post(`${API_BASE_URL}/members`, data)
            .then(res => resolve(res?.data))
            .catch(err => reject(err))
    });

export const getTeamMembers = () =>
    new Promise((resolve, reject) => {
        axios
            .get(`${API_BASE_URL}/members`)
            .then(res => resolve(res?.data))
            .catch(err => reject(err))
    });


export const deleteTeamMember = (id) => 
    new Promise((resolve, reject) => {
        axios
            .delete(`${API_BASE_URL}/members`, { data: { id }})
            .then(res => resolve(res?.data))
            .catch(err => reject(err))
    });
