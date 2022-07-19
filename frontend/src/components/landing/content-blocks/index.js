import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'


import CompanyLogo from '../../../assets/images/company_logo.png'

const ContentBlocks = props => {
    const navigate = useNavigate();

    return (
        <div className="content-blocks">
            <div className="yellow-content-block">
                <p>Our approach is to utilize industry standards that have proven success in areas such as the NFT collection and successful community management, while pushing the boundaries of this space with a personalized metaverse experience and NFT with utilization to bring to life based on your team’s vision.</p>
                <div className='btn-outlined reversed pointer' onClick={() => navigate('/services', { replace: true })}>More</div>
            </div>

            <div className="blue-content-block">
                <div className='stoneland-logo' ></div>
                <p className='date-text'>
                    Volcom NFTs<br />
                    <span>JUNE 7, 2022</span>
                </p>
                <p className='description-text'>Multi-phase 3 year project including NFT drop with whitelist registration, Metaverse store, virtual skate park experience and gamification opportunities.</p>
                <a href="https://stoneland.volcom.com/" target="_blank" className='btn-outlined pointer'>Visit</a>
            </div>
        </div >
    )
}

export default ContentBlocks;
