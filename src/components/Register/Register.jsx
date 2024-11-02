import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.module.css';

const Register = () => {
    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.pageTitle}>Реєстрація</h2>
            <div className={styles.authContainer}>
                <form>
                    <input type="text" className={styles.inputField} placeholder="Ім'я" />
                    <input type="text" className={styles.inputField} placeholder="Прізвище" />
                    <input type="tel" className={styles.inputField} placeholder="Телефон" />
                    <input type="email" className={styles.inputField} placeholder="Email" />
                    <input type="password" className={styles.inputField} placeholder="Пароль" />
                    <div className={styles.privacyPolicy}>
                        <input type="checkbox" id="privacyPolicy" className={styles.checkbox} />
                        <label htmlFor="privacyPolicy">Я приймаю політику конфіденційності</label>
                    </div>
                    <button type="submit" className={styles.submitButton}>Зареєструватися</button>
                </form>
                <p>
                    Вже маєте обліковий запис? <Link to="/login">Увійти</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;