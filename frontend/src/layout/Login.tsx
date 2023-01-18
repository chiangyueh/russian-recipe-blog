import React,{useState,useRef,useEffect} from "react";
import styles from './Login.module.css'
import {useNavigate} from 'react-router-dom'
import { login } from "../api/user";
import debounce from "../utils/debounce";
const Login = () => {
  const navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      navigate('/')
      navigate(0)
    }
  },[email,password])
  const submit =  (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const props = {email,password}
    debounce(()=>{login(props).then(res=>{
      sessionStorage.setItem('token', res.token)
      setEmail('')
      setPassword('')
    })})()
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
      Личный кабинет
      </div>
      <form className={styles.form} onSubmit={submit}>
        <label>Email<span className={styles.span}>*</span></label>
        <input type='email' className={styles.input} placeholder='Адрес электронной почты' onChange={(e)=>setEmail(e.target.value)}></input>
        <label>Пароль<span className={styles.span}>*</span></label>
        <input type='password' className={styles.input} placeholder='Пароль' onChange={(e)=>setPassword(e.target.value)}></input>
        <button className={styles.btn}>Войти</button>
      </form>
    </div>
  )
}

export default Login