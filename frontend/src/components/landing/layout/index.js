import React, { useState, useEffect } from 'react';
import { Footer, Navbar, Partner } from '../../base';
import Culture from '../culture';
import TitleBlocks from '../title-blocks';
import './index.scss'
import ContentBlocks from '../content-blocks';
import BannerLanding from '../banner-landing';
import Banner2Landing from '../banner2-landing';
import StonelandDropBlock from '../../drops/stoneland-drop';
import ServicesMobileBlock from '../services-mobile-block';
import MeetTheTeam from '../../about-us/meet-the-team';

const desktopBlocks = props => {
    return (
        <div>
            <TitleBlocks />
            <ContentBlocks />
        </div>
    );
}

const mobileBlocks = props => {
    return (
        <div className='mobile-blocks'>
            <div className='yellow-block'>
                <div className="yellow-title-block">
                    <h1>Services</h1>
                    <hr />
                </div>
                <div className="margin-item">
                    <ServicesMobileBlock />
                </div>

            </div>
            <div className='blue-block'>
                <div className="blue-title-block">
                    <h1>Latest Drops</h1>
                    <hr />
                </div>
                <div className="margin-item">
                    <StonelandDropBlock />
                </div>

            </div>
        </div>
    );
}

const Layout = props => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isDesktop = windowWidth >= 800;
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);
    return (
        <div className="landing-page">
            <Navbar />
            <BannerLanding />
            <div className="background-page">
                <Culture />
                {isDesktop ? desktopBlocks() : mobileBlocks()}
                <Banner2Landing />
                <MeetTheTeam />
                <Partner />
                <Footer />
            </div>

        </div>
    )
}

export default Layout;