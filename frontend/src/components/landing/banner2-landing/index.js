import React from 'react';

import { useNavigate } from 'react-router-dom';
import Image from '../../../assets/images/landing-banner.png'
import './index.scss'

const Banner2Landing = props => {
    const navigate = useNavigate();
    return (
        <div className="basic-banner banner2-landing no-before txt-white">
            {/* <img className='image' src={OverlayColor} alt="banner image" /> */}
            <h1>Interested in a Metaverse demo?</h1>
            <div className='btn-outlined pointer' onClick={() => navigate('/contact', { replace: true })}>Contact Us</div>
            {/* <div className="overlay" /> */}
        </div>
    )
}

export default Banner2Landing;