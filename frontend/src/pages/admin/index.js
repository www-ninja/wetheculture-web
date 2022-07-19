import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout, { LoginPage, ManageTeam, ManageContact } from '../../components/admin';
import useAuth from '../../hooks/useAuth';

import './index.scss'

const AdminDashboard = props => {    
    const { authed, login } = useAuth();

    return !authed ? <LoginPage onSubmit={login}/> : (
        <div className='page-wapper'>
            <Layout>
                <Routes>
                    <Route path="/" element={<ManageContact />} />
                    <Route path="/team" element={<ManageTeam />} />
                </Routes>                
            </Layout>
        </div>
    )
}

export default AdminDashboard;