import React from 'react';
import { Footer, Navbar, Partner } from '../../base';
import BannerAboutUs from '../banner-about-us';
import Banner2Landing from '../../landing/banner2-landing';
import Culture from '../culture';
import './index.scss'
import MeetTheTeam from '../../about-us/meet-the-team';

const Layout = props => {
    return (
        <div className="landing-page">
            <Navbar where={"about-us"} />
            <BannerAboutUs />
            <Culture />
            <MeetTheTeam />
            <Banner2Landing />
            <Partner />
            <Footer />
        </div>
    )
}

export default Layout;