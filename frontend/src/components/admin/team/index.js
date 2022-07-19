import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../../base";
import AddForm from "./addForm";
import { postMemberRequest, getMembersRequest, deleteMemberRequest } from "../../../actions/memberActions";

import { MEMBER_TABLE_COLUMNS } from '../../../constant';

import './index.scss';
import DeleteModal from "./deleteModal";
import { MdSettingsRemote } from "react-icons/md";

const ManageTeam = props => {
    const dispatch = useDispatch();
    const { members } = useSelector(state => state.member);
    const [ addForm, setAddForm ] = useState(false);
    const [ deleteModal, setDeleteModal ] = useState(false);
    const [ item, setItem ] = useState(null);
    
    
    useEffect(() => {
        dispatch(getMembersRequest())
    }, [])

    const addNew = () => {
        setAddForm(true)
    }

    const submitNew = (data) => {
        dispatch(postMemberRequest(data, () => setAddForm(false)))
    }

    const onEdit = (val) => {
        // console.log('here edit', val)
    }

    const onDelete = (val) => {
        setDeleteModal(true)
        setItem(val)
    }

    const deleteItem = () => {
        dispatch(deleteMemberRequest(item, () => setDeleteModal(false)))
    }

    return (
        <div className="manage-team">
            {addForm ? 
            <AddForm onSubmit={submitNew} onBack={() => setAddForm(false)}/> :
            <Table 
                header={{
                    title: 'Members List', 
                    actions: [
                        {
                            title: 'add',
                            callback: addNew
                        }
                    ]}} 
                cols={MEMBER_TABLE_COLUMNS} list={members || []}
                onEdit={onEdit}
                onDelete={onDelete}
            />}

            {deleteModal && ReactDOM.createPortal(
                    <DeleteModal 
                        onClose={() => setDeleteModal(false)} 
                        onDelete={() => deleteItem()}
                    />, 
                    document.getElementById('root')
                )
            }
        </div>
    )
}

export default ManageTeam;
