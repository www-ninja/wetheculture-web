import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import './index.scss';

const Form = ({ onSubmit, error, loading }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (!error) return;
        // if (error.message === 'Email is already existing') setError('email', error, true);
        if (error.messages && error.messages.length) {
            error.messages.forEach(async (element) => {
                setError(element.param, { message: element.title })
            });
        }
    }, [error])

    return (
        <div className="contact-form mb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-title">Contact Form</div>

                <div className="form-group">
                    <label>Company Name*</label>
                    <input maxLength="50" {...register('company_name', { required: "Company name is a required" })} />
                    {errors.company_name && <p className="error">{errors.company_name.message}</p>}
                </div>

                <div className="form-group">
                    <label>First Name*</label>
                    <input maxLength="50" {...register('first_name', { required: "First name is a required" })} />
                    {errors.first_name && <p className="error">{errors.first_name.message}</p>}
                </div>

                <div className="form-group">
                    <label>Last Name*</label>
                    <input maxLength="50" {...register('last_name', { required: "Last name is a required" })} />
                    {errors.last_name && <p className="error">{errors.last_name.message}</p>}
                </div>

                <div className="form-group">
                    <label>Phone*</label>
                    <input minLength="7" maxLength="16" {...register('phone_number', { required: "Phone number is a required" })} />
                    {errors.phone_number && <p className="error">{errors.phone_number.message}</p>}
                </div>

                <div className="form-group">
                    <label>Email*</label>
                    <input maxLength="50" {...register('email', { required: "Email address is a required" })} />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label>Tell us about your project</label>
                    <textarea {...register('description')} rows="5" />
                </div>

                <input type="submit" disabled={loading} />
            </form>
        </div>
    )
}

export default Form;