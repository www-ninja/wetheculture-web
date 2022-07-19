import React from "react"

import './index.scss';

const Button = ({label, callback, className=''}) => {
    return (
        <button className={`button ${className}`} onClick={callback}>{label}</button>
    )
}

export default Button