import React, { Children, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "./sidebar";
import Toolbar from "./toolbar";
import LoginPage from "./login";
import ManageTeam from "./team";
import ManageContact from "./contacts";

import { getProfileRequest } from "../../actions/userActions";
import { getContactRequest } from "../../actions/contactActions";

import './index.scss';

const NAV_ITEMS = [
    {
        title: 'Management Contacts',
        link: '/admin',
    },
    {
        title: 'Management Team',
        link: '/admin/team',
    },
    {
        title: 'Admin Setting',
        link: '/admin/setting',
    }
]

const Layout = props => {
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector(state => state.user)
    const [updateModal, setUpdateModal] = useState(false);
    useEffect(() => {
        dispatch(getProfileRequest())
    }, [])

    useEffect(() => {
        if(user) {
            console.log(user);
            dispatch(getContactRequest())
        }
    }, [user])

    return (
        <div className="admin-page">
            <Sidebar items={NAV_ITEMS}/>
            <Toolbar />
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
export {
    LoginPage,
    ManageContact,
    ManageTeam,
}