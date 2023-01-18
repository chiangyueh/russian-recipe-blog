import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPlusSquareFill, BsSearch } from "react-icons/bs";
import addArticle from "../mobx/AddArticle";
import debounce from "../utils/debounce";
const Header = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const logOut = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };
  const createArticle = () => {
    addArticle.open();
  };
  const Search = (value: string) => {
    debounce(()=>{console.log(value)})()
      
  };
  return (
    <div className={styles.container}>
      <div>
        <Link to="/" className={styles.homeLink}>
          Соль и Перец
        </Link>
      </div>
      <input
        className={styles.input}
        onChange={(e) => Search(e.target.value)}
      />
      <div className={styles.user}>
        {token ? (
          <>
            <BsFillPlusSquareFill
              size={35}
              className={styles.BsFillPlusSquareFill}
              onClick={createArticle}
            ></BsFillPlusSquareFill>
            <Link to="/myArticles" className={styles.link}>
              Мои статьи
            </Link>
            <Link to="#" className={styles.link} onClick={logOut}>
              Выйти
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.link}>
              Логин
            </Link>
            <Link to="/register" className={styles.link}>
              Регистрация
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
