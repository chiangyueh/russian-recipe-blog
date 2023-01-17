import React from "react";
import styles from './Register.module.css'
const Register = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
      Введите данные
      </div>
      <form className={styles.form}>
        <label>Имя<span className={styles.span}>*</span></label>
        <input className={styles.input} placeholder='Ваше имя'></input>
        <label>Email<span className={styles.span}>*</span></label>
        <input className={styles.input} placeholder='Адрес электронной почты'></input>
        <label>Пароль<span className={styles.span}>*</span></label>
        <input className={styles.input} placeholder='Пароль'></input>
        <button className={styles.btn}>Отплавить</button>
      </form>
    </div>
  );
};

export default Register;
