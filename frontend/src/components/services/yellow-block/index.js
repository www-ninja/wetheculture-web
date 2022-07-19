import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'


const ServiceYellowBlock = props => {
    const navigate = useNavigate();
    return (
        <div className="service-yellow-block">
            <p className='font-montserrat'>Contact Us today to learn more and get started on bringing your vision to reality.</p>
            <div className='btn-outlined pointer' onClick={() => navigate('/contact', { replace: true })}>Contact Us</div>
        </div>
    )
}

export default ServiceYellowBlock;