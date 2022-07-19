import React from 'react';
import './index.scss'
import { useNavigate } from 'react-router-dom';

const ServicesMobileBlock = props => {
    const navigate = useNavigate();
    return (
        <div className="services-mobile-block">
            <p className='description-text'>Our approach is to utilize industry standards that have proven success in areas such as the NFT collection and successful community management, while pushing the boundaries of this space with a personalized metaverse experience, and NFT with utilization to bring to life based on your team’s vision.</p>
            <div className='btn-outlined reversed pointer' onClick={() => navigate('/services', { replace: true })}>More</div>
        </div >
    )
}

export default ServicesMobileBlock;