import React, { Fragment, useEffect, useState } from "react";
import MemberItem from "./item";
import './index.scss';

const Members = ({ data }) => {

    const [exeTeam, setExeTeam] = useState([]);
    const [manageTeam, setManageTeam] = useState([]);
    const [techTeam, setTechTeam] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            setExeTeam(data.filter(data => data.team === 'executive'));
            setManageTeam(data.filter(data => data.team === 'management'));
            setTechTeam(data.filter(data => data.team === 'tech'));
        }
    }, [data])
    return (
        <div className="members py-4">
            <div className="member-team">
                {exeTeam && exeTeam.length > 0 && (
                    <Fragment>
                        <h5 className="mb-1">Executive Team</h5>
                        <div className="align-middle">
                            <div className="team-item-wrapper col-count-3 col-c1-md">
                                {exeTeam.map((item, index) => <MemberItem key={index} info={item} />)}
                            </div>
                        </div>
                    </Fragment>
                )}
                {manageTeam && manageTeam.length > 0 && (
                    <Fragment>
                        <h5 className="mt-3 mb-1">Management Team</h5>
                        <div className="team-item-wrapper col-count-3 col-c2-lg col-c1-md">
                            {manageTeam.map((item, index) => <MemberItem key={index} info={item} />)}
                        </div>
                    </Fragment>
                )}
                {techTeam && techTeam.length > 0 && (
                    <Fragment>
                        <h5>Technical Team</h5>
                        <div className="team-item-wrapper col-c2-md col-c1-sm">
                            {techTeam.map((item, index) => <MemberItem key={index} info={item} />)}
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    )
}

export default Members;