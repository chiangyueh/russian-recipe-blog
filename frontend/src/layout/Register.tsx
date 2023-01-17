import React, { useState, useRef, useEffect } from "react";
import styles from "./Register.module.css";
import { register } from "../api/user";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/");
      navigate(0);
    }
  });
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const debounce = useRef(true);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const props = { email, userName, password };
    if (debounce.current) {
      debounce.current = false;
      register(props).then((res) => {
        setMsg(res.message);
        setUserName("");
        setEmail("");
        setPassword("");
        debounce.current = true;
      });
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Введите данные</div>
      <form className={styles.form} onSubmit={submit}>
        <label>
          Имя<span className={styles.span}>*</span>
        </label>
        <input
          className={styles.input}
          placeholder="Ваше имя"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <label>
          Email<span className={styles.span}>*</span>
        </label>
        <input
          type="email"
          className={styles.input}
          placeholder="Адрес электронной почты"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>
          Пароль<span className={styles.span}>*</span>
        </label>
        <input
          type="password"
          className={styles.input}
          placeholder="Пароль"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className={styles.showMsg}>
          <button className={styles.btn}>Отплавить</button>
          <span>{msg}</span>
        </div>
      </form>
    </div>
  );
};

export default Register;
