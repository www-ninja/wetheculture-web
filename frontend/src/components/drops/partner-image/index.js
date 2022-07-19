import React from 'react';
import './index.scss'

import VolcomImage from '../../../assets/images/volcom-logo.png'

const PartnerImage = props => {
    return (
        <div className="partner-images">
            <img className='image' src={VolcomImage} alt="banner image" />
        </div>
    )
}

export default PartnerImage;