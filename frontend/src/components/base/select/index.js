import React, { Component } from 'react'
import Select from 'react-select'
import { TEAM_OPTION } from '../../../constant';

import './index.scss';

const SelectOption = ({ value, onChange}) => {
    return (
        <Select 
            className='select'
            options={TEAM_OPTION} 
            value={value}
            onChange={onChange}/>
    )
  
}

export default SelectOption;