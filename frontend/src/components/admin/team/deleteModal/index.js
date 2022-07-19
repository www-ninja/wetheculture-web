import React from "react";
import { Button } from "../../../base";

import './index.scss';

const DeleteModal = (props) => {
    const { onClose, onDelete } = props;
    return (
        <div className="delete-modal-container">
            <div className="modal-content">
                <div className="title">Are you sure to delete this member?</div>
                <div className="action">
                    <Button label='cancel' className="btn-outline" callback={onClose}/>
                    <Button label='ok' className="btn-primary" callback={onDelete}/>
                </div>
            </div>

        </div>
    )
}

export default DeleteModal;