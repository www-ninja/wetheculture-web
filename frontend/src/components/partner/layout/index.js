import React from 'react';
import { Footer, Navbar, Partner } from '../../base';
import Banner2Landing from '../../landing/banner2-landing';
import BannerPartner from '../banner-partner';
import Culture from '../culture';
import PartnerImages from '../partner-images';
import './index.scss'

const Layout = props => {
    return (
        <div className="landing-page">
            <Navbar where={"partner"} />
            <BannerPartner />
            <Culture />
            <PartnerImages />
            <Banner2Landing />
            <Partner />
            <Footer />
        </div>
    )
}

export default Layout;