import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'


const BlackBlock = props => {
    const navigate = useNavigate();
    return (
        <div className="team-black-block">
            <p className='font-montserrat'>We The Culture is building and shaping the future of our digital culture. Through strategic brand partnerships and our own digital properties, we are forging a path into the future of all things web3.</p>
        </div>
    )
}

export default BlackBlock;