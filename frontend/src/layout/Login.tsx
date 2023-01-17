import React from 'react'
import styles from './Login.module.css'
const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
      Личный кабинет
      </div>
      <form className={styles.form}>
        <label>Email<span className={styles.span}>*</span></label>
        <input className={styles.input} placeholder='Адрес электронной почты'></input>
        <label>Пароль<span className={styles.span}>*</span></label>
        <input className={styles.input} placeholder='Пароль'></input>
        <button className={styles.btn}>Войти</button>
      </form>
    </div>
  )
}

export default Login