import React, { useState,useRef ,useEffect} from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { BsFillPlusSquareFill } from "react-icons/bs";
import addArticle from "../mobx/AddArticle";
import debounce from "../utils/debounce";
import { getSearch } from "../api/search";
import searchArticle from "../mobx/SearchArticle";
import { getAll } from "../api/post";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const navigate = useNavigate()
  const value = useRef('')
  useEffect(()=>{
    getAll().then(res=>{
      searchArticle.add(res)})
  },[])

  const logOut = () => {
    sessionStorage.removeItem("token");
    setToken(null);
    navigate('/')
    navigate(0)
  };
  const createArticle = () => {
    addArticle.open();
  };
  const SearchDebounce = debounce(()=>{getSearch(value.current).then(res=>{
    searchArticle.add(res.data)
  })})
  const DefaultSearchDebounce = debounce(()=>{
    getAll().then(res=>{
      searchArticle.add(res)})
  })
  const Search = (getValue: string) => {
    value.current = getValue
    if(value.current === ''){
      DefaultSearchDebounce()
    }else{
      SearchDebounce()
    }
  };
  const aa =() =>{console.log(searchArticle.input[0].title)}
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
