import React, { useState, useEffect, Fragment } from "react"
import Button from "../button";
import { API_BASE_URL } from "../../../utils";

import './index.scss';

const DefaultActions = (props) => {
    return (
        <Fragment>            
            <Button className="btn-edit cell-action" label='edit' callback={props.onEdit}/>
            <Button className="btn-delete cell-action" label='delete' callback={props.onDelete} />
        </Fragment>
    )
}

const Cell = ({ col, item, onEdit, onDelete }) => {
    return (
        <td>            
            {col.type === 'action' ? <DefaultActions onEdit={() => onEdit(item)} onDelete={() => onDelete(item)} /> :
            col.key === 'avatar' ? <img src={`${API_BASE_URL}/members/image?file_name=${item[col.key]}`} className="member-profile" alt="avatar-image"/> : 
            item[col.key]}
        </td>
    )
}

const Table = props => {
    const { header, cols, list, onEdit, onDelete } = props;
    return (
        <div className="table-wrapper">
            { header && (
                <div className="header">
                    {header.title}
                    {header.actions && (
                        <div className="header-action">
                            {header.actions.map((action, index) => 
                                <div 
                                    key={index} 
                                    className="btn-action"
                                    onClick={action.callback} >
                                        {action.title}
                                </div>)}
                        </div>
                    )}
                </div>
            )}
            <table>
                <thead>
                    {cols.map((col, index) => <th key={index}>{col.title}</th>)}
                </thead>
                <tbody>
                    {list.map((item, rIndex) => 
                        <tr key={rIndex}>
                            {cols.map((col, cIndex) => 
                                <Cell 
                                    key={cIndex} 
                                    col={col} 
                                    item={item}
                                    onEdit={onEdit}
                                    onDelete={onDelete}
                                />
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;