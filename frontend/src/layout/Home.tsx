import React,{useState,useEffect} from 'react'
import styles from './Home.module.css'
import MenuBlock from '../components/MenuBlock'
import {getAll} from '../api/post'
import searchArticle from '../mobx/SearchArticle'
const { observer } = require( "mobx-react-lite/lib/index");
interface params {
  tags : Array<string>,
  title : string,
  _id : string,
  imgUrl : string
}

const Home = () => {
  // const [result, setResult] = useState<Array<params>>([])
  // useEffect(()=>{
  //   getAll().then(res=>{setResult(res)})
  // },[])
  // console.log(123)
  return (
    <div className={styles.wrapper}>
      {searchArticle.input.map(res=>(
        <MenuBlock title={res.title} tags={res.tags} _id={res._id} imgUrl={res.imgUrl} key={res._id}></MenuBlock>
      ))}
    </div>
  )
}

export default observer(Home)