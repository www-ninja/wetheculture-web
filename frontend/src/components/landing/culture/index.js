import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'


const Culture = props => {
    const navigate = useNavigate();
    return (
        <div className="culture-landing">
            <div className='offer'>
                <div className='container'>
                    <hr className='one left-wrapper' />
                    <p className='two font-montserrat'><b>We the Culture</b> enables you to join the digital movement – whether purchasing NFTs, hanging out in the metaverse, playing in cryptocurrency or having other synergies with the ever growing and changing Web3. Fortune 500 brands, influencers, international icons, and others are rushing to the space to see where their unique identity intersects. Successful entrances into the Web3 space are paying off massively in more ways than one. The problem most face is simply a lack of in-house infrastructure, industry knowledge, and technological resources. That is where <b>We the Culture</b> comes in to develop a creative strategy and manage your Web3 efforts.</p>
                </div>
                <div className='btn-outlined reversed add-border pointer' id="latest-drops" onClick={() => navigate('/about-us', { replace: true })}>about us</div>
            </div>

        </div>
    )
}

export default Culture;