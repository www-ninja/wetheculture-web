import React from 'react';
import './index.scss'

import VolcomImage from '../../../assets/images/volcom.png'

const PartnerImages = props => {
    return (
        <div className="partner-images">
            <a href='/volcom'><img src={VolcomImage} alt="banner image" /></a>
        </div>
    )
}

export default PartnerImages;