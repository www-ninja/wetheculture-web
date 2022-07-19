import React from "react";
import { API_BASE_URL } from "../../../../utils";

import './index.scss';

const MemberItem = ({ info }) => {
    let styles = {
        backgroundImage: `url(${API_BASE_URL + '/members/image?file_name=' + info.avatar})`
    };
    return (
        <div className="member-item">
            <div className="info">
                <span>{ info.name }</span>
                { info.role }
            </div>
            <div className="profile-img" style={styles}></div>
        </div>
    )
}

export default MemberItem;