import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.pageTitle}>Вхід</h2>
            <div className={styles.authContainer}>
                <form>
                    <input type="email" className={styles.inputField} placeholder="Email" />
                    <input type="password" className={styles.inputField} placeholder="Пароль" />
                    <div className={styles.rememberMe}>
                        <input type="checkbox" id="rememberMe" className={styles.checkbox} />
                        <label htmlFor="rememberMe">Запамятати мене</label>
                    </div>
                    <button type="submit" className={styles.submitButton}>Увійти</button>
                </form>
                <p>
                    Немає облікового запису? <Link to="/register">Зареєструватися</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
