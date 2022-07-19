import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'


const Culture = props => {
    const navigate = useNavigate();
    return (
        <div className="culture-partner">
            <div className='offer'>
                <div className='container'>
                    <hr className='one left-wrapper' />
                    <p className='two'><b>We the Culture</b> utilizes industry standards that have proven success in areas like NFT collections, successful community management, unforgettable metaverse experiences, all while pushing the boundaries of this space with a personalized Web3 experience that we bring to life based on your team’s vision.
                        <br /><br />
                        Our goal is to empower your community with an exclusive opportunity to make a successful entrance into the Web3 space. Additionally, we will simultaneously create new revenue streams and provide access to an entirely new market for the brand.</p>
                </div>
            </div>
        </div>
    )
}

export default Culture;