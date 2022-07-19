import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import desktopImage from '../../../assets/images/logo2.svg';
import mobileImage from '../../../assets/images/logo.svg';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import './index.scss'

const Navbar = props => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [navbarOpen, setNavbarOpen] = useState(false)
    const imageUrl = windowWidth >= 680 ? desktopImage : mobileImage;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
            closeMenu();
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }

    return (
        <div className="nav-bar">
            <img src={imageUrl} alt="logo" onClick={() => navigate('/', { replace: true })} />

            <div className='nav-links-desktop'>
                <div className={(props.where == "about-us" ? 'selected-item' : 'unselected-item') + ' pointer'}><a href='/about-us'>About Us</a></div>
                <div className={(props.where == "services" ? 'selected-item' : 'unselected-item') + ' pointer'}><a href='/services'>Services</a></div>
                <div className={(props.where == "drops" ? 'selected-item' : 'unselected-item') + ' pointer'}><a href='/drops'>Latest Drops</a></div>
                <div className={(props.where == "partner" ? 'selected-item' : 'unselected-item') + ' pointer'}><a href='/partner'>Strategic Partners</a></div>
            </div>

            <div className='nav-links-mobile'>
                <button onClick={handleToggle}>
                    {navbarOpen ? (
                        <MdClose className='hamburguer-icon close' />
                    ) : (
                        <FiMenu className='hamburguer-icon open' />
                    )}
                </button>
                <ul className={`menu-nav ${navbarOpen ? "show-menu" : "hide-menu"}`}>
                    <li><a href='/about-us' onClick={() => closeMenu()}>About Us</a></li>
                    <li><a href='/services' onClick={() => closeMenu()}>Services</a></li>
                    <li><a href='/drops' onClick={() => closeMenu()} > Latest Drops</a></li>
                    <li><a href='/partner' onClick={() => closeMenu()} > Strategic Partners</a></li>
                </ul>
            </div >


        </div >
    )
}

export default Navbar;