import React from 'react';
import './index.scss';

const InputGroup = ({ id, title, value, onChange, type = "text" }) => {
    return (
        <div className='input-group'>
            <input
                type={type}
                id={id}
                className='input-area'
                value={value}
                onChange={onChange}
                required
            />
            <label htmlFor={id} className='label'>{title}</label>
        </div >
    )
}

export default InputGroup;