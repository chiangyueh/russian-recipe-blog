import React from 'react'
import styles from './Home.module.css'
import MenuBlock from '../components/MenuBlock'
const Home = () => {
  return (
    <div className={styles.wrapper}>
      <MenuBlock></MenuBlock>
      <MenuBlock></MenuBlock>
      <MenuBlock></MenuBlock>
      <MenuBlock></MenuBlock>
    </div>
  )
}

export default Home