import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Footer, Navbar, Partner } from '../base';
import Form from './form';
import SuccessModal from './successModal';

import { registerContact } from '../../services/api';


import './index.scss';

const Layout = props => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const res = await registerContact(data);
            setModal(true);
        } catch (error) {
            console.log(error)
            setError(error);
        }
        setLoading(false);
    }
    return (
        <div className='contact-page' id="layout">
            <Navbar />
            <div className='header mt-4 align-middle'>
                <h1>How Can We Help?</h1>
                <p>We would love to chat about your ideas and explore the options available to you in the Metaverse. Submit the form below and we will get in touch.</p>
            </div>
            <Form onSubmit={onSubmit} error={error} loading={loading} />
            <Partner />
            <Footer />
            {modal && ReactDOM.createPortal(<SuccessModal />, document.getElementById('layout'))}
        </div>
    )
}

export default Layout;