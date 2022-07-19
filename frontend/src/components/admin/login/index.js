import React, { useEffect, useState } from "react";
import { InputGroup, Button } from "../../base";
import { useForm } from "react-hook-form";

import './index.scss';
import { validateEmail } from "../../../utils";

const LoginPage = props => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const onSubmit = () => {
        const errors = {};
        if(email === '') errors.email = "Email is required";
        else if(!validateEmail(email)) errors.email = "Email is invalid";
        if(password === '') errors.password = "Password is required.*Use any string to make sure its not empty";
        if(Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        props.onSubmit({email, password});
    }

    useEffect(() => {
        const errors = error;
        if(email !== '') delete errors.email
        if(password !== '') delete errors.password
        setError(errors);
    }, [email, password])

    return (
        <div className="admin-login">
            <div className="login-form">
                <div className="form-title">Admin Login</div>
                <InputGroup id='email' title="Email" value={email} onChange={(ev) => setEmail(ev.target.value) }/>
                {error?.email && <p className="error">{error.email}</p>}
                <InputGroup id='password' title="Password" value={password} onChange={(ev) => setPassword(ev.target.value) }/>
                {error?.password && <p className="error">{error.password}</p>}
                <Button className="btn-signin" label='Sign In' callback={() => onSubmit()} />
            </div>
        </div>
    )
}

export default LoginPage;