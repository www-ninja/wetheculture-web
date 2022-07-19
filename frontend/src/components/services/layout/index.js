import React from 'react';
import { Footer, Navbar, Partner } from '../../base';
import BannerServices from '../banner-services';
import Culture from '../culture';
import ServiceYellowBlock from '../yellow-block';
import './index.scss'

const Layout = props => {
    return (
        <div className="landing-page">
            <Navbar where={"services"} />
            <BannerServices />
            <Culture />
            <ServiceYellowBlock />
            <Partner />
            <Footer />
        </div>
    )
}

export default Layout;