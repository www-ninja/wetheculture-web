import React from 'react';
import { Footer, Navbar, Partner } from '../../base';
import Terms from '../terms';
import './index.scss'

const Layout = props => {
    return (
        <div className="terms-page">
            <Navbar />
            <Terms />
            <Partner />
            <Footer />
        </div>
    )
}

export default Layout;