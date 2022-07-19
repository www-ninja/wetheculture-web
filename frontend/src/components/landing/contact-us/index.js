import React from 'react';
import { useNavigate } from 'react-router-dom';

import Image from '../../../assets/images/landing-header.svg'
import './index.scss'

const ContactUS = props => {
    const navigate = useNavigate();
    return (
        <div className="contact-us">
            <img className='image-landing' src={Image} alt="banner image" />
            <p>Shaping our digital culture</p>
            <p>Bring Your Organization To Web3</p>
            <div className='btn-about-us mt-3' onClick={() => navigate('/about-us', { replace: true })}>How?</div>
        </div>
    )
}

export default ContactUS;