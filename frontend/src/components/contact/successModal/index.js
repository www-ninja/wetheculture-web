import React from "react";
import { useNavigate } from "react-router-dom";
import LOGO from '../../../assets/images/logo.svg';

import './index.scss';

const SuccessModal = props => {
    const navigate = useNavigate();
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="content">
                    <img src={LOGO} alt="company-logo" />
                    <h2>Thanks for the inquiry. You’ll be hearing from us shortly!</h2>
                    <div className="btn-exit" onClick={() => navigate('/', { replace: true})}>Exit</div>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal;