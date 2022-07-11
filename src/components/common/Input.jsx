import { useEffect, useState } from 'react';

const Input = (props) => {
    const {
        name,
        type,
        id,
        errorText,
        value,
        setFormData,
        required = false,
    } = props;

    const [error, setError] = useState('');

    const handleChange = (evt) => {
        console.log(evt.target);

        setFormData((prev) => ({
            ...prev,
            [evt.target.name]: evt.target.value,
        }));
    };

    useEffect(() => {
        setError(errorText);
    }, [errorText]);

    return (
        <label className="auth-form__label" htmlFor={id}>
            <span className="auth-form__label-text">Пароль</span>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                className="auth-form__item"
                required={required}
            />
            <span
                className={`auth-form__error ${
                    error ? 'auth-form__error_active' : ''
                }`}
            >
                {error}
            </span>
        </label>
    );
};

export default Input;
