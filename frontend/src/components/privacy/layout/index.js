import React from 'react';
import { Footer, Navbar, Partner } from '../../base';
import './index.scss'
import Privacy from '../privacy';

const Layout = props => {
    return (
        <div className="privacy-page">
            <Navbar />
            <Privacy />
            <Partner />
            <Footer />
        </div>
    )
}

export default Layout;