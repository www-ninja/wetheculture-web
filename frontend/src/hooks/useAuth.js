import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { settingGlobalHeader } from "../utils";

import { authActions } from '../actions'

const { loginRequest } = authActions;


const authContext = createContext();

function useAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { token } = useSelector(state => state.auth);
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthed(true);
            settingGlobalHeader(token);
        }
    }, []);

    useEffect(() => {
        if (token) {
            setAuthed(true)
            settingGlobalHeader(token)
            navigate('/admin');
        }
    }, [token]);


    const logout = () => {
        localStorage.removeItem('token');
        setAuthed(false);
        navigate('/admin');
    }
    return {
        authed,
        login(data) {
            return dispatch(loginRequest(data));
        },
        // register(data) {
        //     return dispatch(registerRequest(data));
        // },
        logout() {
            return logout();
        }
    };
}

export function AuthProvider({ children }) {
    const auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
    return useContext(authContext);
}
