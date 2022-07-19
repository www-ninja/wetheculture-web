import React from 'react';
import './index.scss'

import VolcomImage1 from '../../../assets/images/volcom_screenshot_1.png'
import VolcomImage2 from '../../../assets/images/volcom_screenshot_2.png'

const Gallery = props => {
    return (
        <div className="col-count-2 gapped col-c1-md mb-4 gallery-images">
            <div>
                <img src={VolcomImage1} alt="volcom gallery image 1" />
            </div>
            <div>
                <img src={VolcomImage2} alt="volcom gallery image 2" />
            </div>
            
        </div>
    )
}

export default Gallery;