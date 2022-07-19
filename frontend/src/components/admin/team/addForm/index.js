import React, { useEffect, useState, useRef } from "react";
import { Button, InputGroup } from "../../../base";
import { validateEmail } from "../../../../utils";

import './index.scss';
import SelectOption from "../../../base/select";

const AddForm = props => {
    const { onSubmit } = props;

    const fileInputRef = useRef(null);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [team, setTeam] = useState(null);
    const [role, setRole] = useState('');
    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const [error, setError] = useState({});

    const submitForm = () => {
        const errors = {};
        if(name === '') errors.name = 'Name is required';
        if(email === '') errors.email = 'Email is required';
        if(!validateEmail(email)) errors.email = 'Email is not valid';
        if(!team ) errors.team = 'Team is required';
        if(role === '') errors.role = 'Role is required';
        if(!file) errors.file = 'Select profile file';
        if(Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        onSubmit({file, name, email, team: team.value, role});
        setLoading(true);
    };

    useEffect(() => {
        let errors = error;
        if(name!=='') delete errors.name;
        if(email!=='' && validateEmail(email)) delete errors.email;
        if(team!=='') delete errors.team;
        if(role!=='') delete errors.role;
        if(file) delete errors.file;
        setError(errors);
    }, [name, email, team, role, file])

    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                setPreview(reader.result.toString() || ''),
            )
            reader.readAsDataURL(event.target.files[0])
            fileInputRef.current.value = ""
        }
    }

    return (
        <div className="add-form">
            <div className="form-title">Add new team member</div>
            <div className='avatar'>
                {preview ?
                <img src={preview} className='avatar-img' alt="avatar" /> :
                <input type="file" id="file-input" onChange={onSelectFile} ref={fileInputRef} />}
                {error?.file && <p className="error">{error.file}</p>}
            </div>
            <InputGroup
                id='name'
                title='Name'
                value={name}
                onChange={ev => setName(ev.target.value)} />
            {error?.name && <p className="error">{error.name}</p>}

            <InputGroup
                id='email'
                title='Email Address'
                value={email}
                onChange={ev => setEmail(ev.target.value)} />
            {error?.email && <p className="error">{error.email}</p>}

            {/* <InputGroup
                id='team'
                title='Team'
                value={team}
                onChange={ev => setTeam(ev.target.value)} /> */}
            <SelectOption 
                value={team} 
                onChange={option => setTeam(option)} />
            {error?.team && <p className="error">{error.team}</p>}

            <InputGroup
                id='role'
                title='Role'
                value={role}
                onChange={ev => setRole(ev.target.value)} />
            {error?.role && <p className="error">{error.role}</p>}

            <Button label={ loading ? 'loading' : 'Add'} className={`btn-add ${loading && ' disabled'}`} callback={submitForm} />
        </div>
    )
}

export default AddForm;
