import React from "react";

import './index.scss'

const Toolbar = props => {
    
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/admin';
    }

    return (
        <div className="tool-bar">
            <div className="btn-logout" onClick={() => logout()}>Log out</div>
        </div>
    )
}

export default Toolbar;