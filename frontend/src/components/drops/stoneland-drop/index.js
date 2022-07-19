import React from 'react';
import './index.scss'

const StonelandDropBlock = props => {
    return (
        <div className="stoneland-drop-block">
            <div className='stoneland-logo' ></div>
            <div className='column-text'>
                <p className='date-text'>
                    Volcom NFTs<br />
                    <span>JUNE 7, 2022</span>
                </p>
                <p className='description-text'>Multi-phase 3 year project including NFT drop with whitelist registration, Metaverse store, virtual skate park experience and gamification opportunities.</p>
            </div>
            <a href="https://stoneland.volcom.com/" target="_blank" className='btn-visit'>Visit</a>
        </div >
    )
}

export default StonelandDropBlock;
