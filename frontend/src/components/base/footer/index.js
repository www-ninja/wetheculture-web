import React from 'react';

import IconTwitter from '../../../assets/images/icon_twitter.svg';
import IconDiscord from '../../../assets/images/icon_discord.svg';
import IconLinkedIn from '../../../assets/images/icon_linkedin.svg';
import IconMediaPost from '../../../assets/images/icon_mediapost.svg';


import './index.scss'

const Footer = props => {
    return (
        <div className="footer">
            <hr />
            <div className='follow-us'>FOLLOW US ON SOCIAL MEDIA</div>
            <div className='social-icons'>
                <a href='https://twitter.com/We_The_Culture' target="_blank"><img src={IconTwitter} alt="icon-twitter" /></a>
                <a href='https://www.linkedin.com/company/wetheculture/' target="_blank"><img src={IconLinkedIn} alt="icon-linkedin" /></a>
                <a href='https://discord.gg/w2Bm4teXaY' target="_blank"><img src={IconDiscord} alt="icon-discord" /></a>
                <a href='https://we-the-culture.sounder.fm/episode/we-the-culture-promo' target="_blank"><img src={IconMediaPost} alt="icon-discord" /></a>
            </div>
            <div className='footer-links'>
                <a href='#itscoming'>Privacy Policy</a>
                <a href='#itscoming'>Terms &amp; Condition</a>
                <a href='/contact'>Contact Us</a>
            </div>
            <div className='copyright'>
                © 2022 Vestibule LLC dba We The Culture. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer;