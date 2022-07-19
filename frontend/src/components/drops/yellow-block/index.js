import React from 'react';
import './index.scss'
import CompanyLogo from '../../../assets/images/company_logo.png'


const StonelandDropBlock = props => {
    return (
        <div className="stoneland-drop-block">
            <div className='stoneland-logo' >
                <img className="company-logo" src={CompanyLogo} alt="company logo" />
            </div>
            <div className='column-text'>
                <p className='date-text'>
                    Volcom NFTs<br />
                    MAY 31, 2022
                </p>
                <p className='description-text'>Multi-phase 3 year project including NFT drop with whitelist registration, Metaverse store, virtual skate park experience and gamification opportunities.</p>
            </div>
            <a href="https://stoneland.volcom.com/" target="_blank" className='btn-visit'>Visit</a>
        </div >
    )
}

export default StonelandDropBlock;