import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'

import HandshakeIcon from '../../../assets/images/handshake_icon.svg'

const MeetTheTeam = props => {
    const navigate = useNavigate();
    return (
        <div className="meet-the-team">
            <span>
                <img src={HandshakeIcon} alt="meet the team icon" />
            </span>
            <h1>Meet The Team</h1>
            <div className='btn-meet-the-team' onClick={() => navigate('/team', { replace: true })}>LET'S GO</div>
        </div>
    )
}

export default MeetTheTeam;