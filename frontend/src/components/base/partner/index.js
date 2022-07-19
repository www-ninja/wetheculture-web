import React from 'react';

import LogoVelovodka from '../../../assets/images/logo_velo_vodka.svg'
import LogoAuthentic from '../../../assets/images/logo_authentic.svg'
import LogoHolr from '../../../assets/images/logo_holr.svg'
import LogoVolcom from '../../../assets/images/logo_volcom.svg'
import LogoMuddhouse from '../../../assets/images/logo_muddhouse.svg'

import './index.scss'

const Partner = props => {
    return (
        <div id="partner" className="partner">
            <h2>We The Culture Partners</h2>
            <div className='our-partners col-count-5 gapped col-c3-lg col-c2-md col-c1-sm'>
                <span className='align-middle'>
                    <img src={LogoVelovodka} alt="logo" />
                </span>
                <span className='align-middle'>
                    <img src={LogoAuthentic} alt="logo" />
                </span>
                <span className='align-middle'>
                    <img src={LogoHolr} alt="logo" />
                </span>
                <span className='align-middle'>
                    <img src={LogoVolcom} alt="logo" />
                </span>
                <span className='align-middle'>
                    <img src={LogoMuddhouse} alt="logo" />
                </span>
            </div>
            <hr />
        </div>
    )
}

export default Partner;