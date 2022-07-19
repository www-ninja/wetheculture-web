import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import './index.scss'

const Sidebar = props => {
    const { items=[] } = props;
    const navigate = useNavigate();    
    const location = useLocation();
    console.log(location);

    return (
        <div className="side-bar">
            <div className="nav-logo">WeTheCulture Admin</div>
            <ul className="nav-items">
                {items.map((item, index) =>
                    <li 
                        key={index} 
                        className={location.pathname == item.link ? 'active' : '' } 
                        onClick={() => navigate(item.link, {replace: true})}
                    >
                        {item.title}
                    </li>)}
            </ul>
        </div>
    )
}

export default Sidebar;