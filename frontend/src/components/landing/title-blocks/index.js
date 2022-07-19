import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'



const TitleBlocks = props => {
    return (
        <div className="title-blocks">

            <div className="yellow-title-block">
                <h1>Services</h1>
            </div>

            <div className="blue-title-block">
                <h1>Latest Drops</h1>
            </div>
        </div>
    )
}

export default TitleBlocks;