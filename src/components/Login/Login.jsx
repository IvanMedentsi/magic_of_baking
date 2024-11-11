
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase";
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function logIn(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        setError("Вибачте, не можемо знайти ваш обліковий запис");
      });
  }

  return (
    <div className={styles.registerContainer}>
      <div className={styles.authContainer}>
        <h2 className={styles.pageTitle}>Вхід</h2>
        <form onSubmit={logIn}>
          <input
            className={styles.inputField}
            placeholder="Please enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <input
            className={styles.inputField}
            placeholder="Please enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button type="submit" className={styles.submitButton}>
            Увійти
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <p>
        Немає облікового запису? <Link to="/register">Зареєструватися</Link>
     
        </p>
      </div>
    </div>
  );
};

export default Login;
