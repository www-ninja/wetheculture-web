import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OverlayColor from '../../../assets/images/color-overlay.png'
import Image from '../../../assets/images/landing-header.png'
import './index.scss'

const BannerLanding = props => {
    const navigate = useNavigate();

    useEffect(() => {

        if (document.location.hash === '#next-session') {
            setTimeout(() => {
                document
                    .querySelector("#next-session")
                    .scrollIntoView({ behavior: "smooth", block: "start" })
            }, 300)
        }
    }, []);


    return (
        <div className="basic-banner banner-landing">
            <div>
                <h1>Shaping our digital culture.</h1>
                <p>Bring Your Organization To Web3</p>
            </div>
            <a className='btn-outlined mt-2' href="/#next-session">How?</a>
            <div id="next-session"></div>
            {/* <div className="overlay" /> */}
        </div>
    )
}

export default BannerLanding;