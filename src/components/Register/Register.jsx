import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useRegister from '../../hooks/useRegister'; // Імпорт вашого хуку
import styles from './Register.module.css';

const Register = () => {
    const { register, loading, error, success } = useRegister(); // Використовуємо хук
    const [credentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.placeholder]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        register(credentials); // Викликаємо функцію реєстрації
    };

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.pageTitle}>Реєстрація</h2>
            <div className={styles.authContainer}>
                <form onSubmit={handleSubmit}>
                    <input type="text" className={styles.inputField} placeholder="Ім'я" onChange={handleChange} />
                    <input type="text" className={styles.inputField} placeholder="Прізвище" onChange={handleChange} />
                    <input type="tel" className={styles.inputField} placeholder="Телефон" onChange={handleChange} />
                    <input type="email" className={styles.inputField} placeholder="Email" onChange={handleChange} />
                    <input type="password" className={styles.inputField} placeholder="Пароль" onChange={handleChange} />
                    <div className={styles.privacyPolicy}>
                        <input type="checkbox" id="privacyPolicy" className={styles.checkbox} />
                        <label htmlFor="privacyPolicy">Я приймаю політику конфіденційності</label>
                    </div>
                    <button type="submit" className={styles.submitButton} disabled={loading}>
                        {loading ? 'Завантаження...' : 'Зареєструватися'}
                    </button>
                    {error && <p className={styles.error}>{error}</p>}
                    {success && <p className={styles.success}>{success}</p>} {/* Відображення успіху */}
                </form>
                <p>
                    Вже маєте обліковий запис? <Link to="/login">Увійти</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
