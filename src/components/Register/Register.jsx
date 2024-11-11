import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase";
import styles from './Register.module.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");

  function register(event) {
    event.preventDefault();
    if (copyPassword !== password) {
      setError("Passwords didn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setCopyPassword("");
        setPassword("");
      })
      .catch((error) => {
        console.log(error);
        setError("Помилка при створенні облікового запису");
      });
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.authContainer}>
        <h2 className={styles.pageTitle}>Реєстрація</h2>
        <form onSubmit={register}>
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
          <input
            className={styles.inputField}
            placeholder="Please enter your password again"
            value={copyPassword}
            onChange={(event) => setCopyPassword(event.target.value)}
            type="password"
          />
          <button type="submit" className={styles.submitButton}>
            Створити
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <p>
        Вже маєте обліковий запис?  <Link to="/login">Увійти</Link>
        
        </p>
      </div>
    </div>
  );
};

export default Register;
