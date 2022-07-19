import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'


const Culture = props => {
    const navigate = useNavigate();
    return (
        <div className="culture-services">
            <div className='offer'>
                <div className='container'>
                    <hr className='one left-wrapper' />
                    <p className='two font-montserrat'><b>We the Culture</b> will work with your vision from inception to execution, tailoring the process to meet your needs. We’ll educate your team on the process, how it will benefit your business model,  and how to monetize and produce creative additions to Web3. We the Culture Services include but are not limited to…
                        <ul>
                            <li>NFT Drops</li>

                            <li>Blockchain Utilization</li>

                            <li> Metaverse Experiences</li>

                            <li> Crypto Tokenization</li>

                            <li>Connecting Web3 and IRL Experiences</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Culture;