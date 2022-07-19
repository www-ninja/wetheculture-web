import React from 'react';
import { Footer, Navbar, Partner } from '../../base';
import Banner2Landing from '../../landing/banner2-landing';
import StonelandDropBlock from '../stoneland-drop';
import './index.scss'

const Layout = props => {
    return (
        <div className="landing-page">
            <Navbar where={"drops"} />
            <StonelandDropBlock />
            <Banner2Landing />
            <Partner />
            <Footer />
        </div>
    )
}

export default Layout;