import React from "react";
import styles from "./Header.module.css";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to='/' className={styles.homeLink}>Соль и Перец</Link>
      </div>
      <input className={styles.input}/>
      <div className={styles.user}>
        <Link to='/myArticles' className={styles.link}>Мои статьи</Link>
        <Link to='/login' className={styles.link}>Логин</Link>
        <Link to='/register' className={styles.link}>Регистрация</Link>
      </div>
    </div>
  );
};

export default Header;
