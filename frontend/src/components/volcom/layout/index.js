import React from 'react';
import { Footer, Navbar, Partner } from '../../base';
import Banner2Landing from '../../landing/banner2-landing';
import Culture from '../culture';
import Gallery from '../gallery';
import PartnerImage from '../partner-image';
import './index.scss'

const Layout = props => {
    return (
        <div className="landing-page">
            <Navbar />
            <PartnerImage />
            <Culture />
            <Gallery />
            <Banner2Landing />
            <Partner />
            <Footer />
        </div>
    )
}

export default Layout;