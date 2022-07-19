import React, { useEffect, useState } from "react";
import { Footer, Navbar, Partner } from '../base';
import Members from "./members";
import { useDispatch, useSelector } from "react-redux";
import { getMembersRequest } from "../../actions/memberActions";

import './index.scss';
import Banner2Landing from "../landing/banner2-landing";
import BlackBlock from "./black-block";

const Layout = props => {
    const dispatch = useDispatch();
    const { members } = useSelector(state => state.member);
    useEffect(() => {
        dispatch(getMembersRequest())
    }, [])
    return (
        <div className="team-page">
            <Navbar />
            <BlackBlock />
            <Members data={members || []} />
            <Banner2Landing />
            <Partner />
            <Footer />
        </div>
    )
}

export default Layout;