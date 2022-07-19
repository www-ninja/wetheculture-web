import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../base";
import { getContactRequest } from "../../../actions/contactActions";
import { CONTACT_TABLE_COLUMNS } from '../../../constant';
import './index.scss';

const ManageContact = props => {
    const dispatch = useDispatch();
    
    const { contacts } = useSelector(state => state.contact);
    
    useEffect(() => {
        dispatch(getContactRequest())
    }, [])

    return (
        <div className="manage-contact">
            <Table header={{title: 'Contact List'}} cols={CONTACT_TABLE_COLUMNS} list={contacts?.contacts || []}/>
        </div>
    )
}

export default ManageContact;
