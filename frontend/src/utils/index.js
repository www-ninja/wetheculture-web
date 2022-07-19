import axios from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_URL;

export const settingGlobalHeader = authToken => {
    axios.defaults.baseURL = API_BASE_URL;
    axios.defaults.headers.get['Accept'] = 'application/json';
    axios.defaults.headers.post['Accept'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
    axios.interceptors.response.use(
        response => response,
        error => {
            if(error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/admin';
            }
        }
    )
    localStorage.setItem('token', authToken);
};

export const createActionTypes = (base, actions = []) =>
    actions.reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});

export const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };