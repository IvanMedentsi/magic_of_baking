import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth'; 
import styles from './Login.module.css';

const Login = () => {
    const { login, loading, error } = useAuth();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!credentials.email) {
            errors.email = 'Email is required';
        }
        if (!credentials.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            login(credentials);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.pageTitle}>Вхід</h2>
            <div className={styles.authContainer}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email" // Додано ім'я
                        className={styles.inputField}
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    {formErrors.email && <p className={styles.error}>{formErrors.email}</p>}
                    <input
                        type="password"
                        name="password" // Додано ім'я
                        className={styles.inputField}
                        placeholder="Пароль"
                        onChange={handleChange}
                    />
                    {formErrors.password && <p className={styles.error}>{formErrors.password}</p>}
                    <button type="submit" className={styles.submitButton} disabled={loading}>
                        {loading ? 'Завантаження...' : 'Увійти'}
                    </button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
                <p>
                    Немає облікового запису? <Link to="/register">Зареєструватися</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
