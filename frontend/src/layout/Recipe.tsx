import React, { useEffect, useState ,useRef} from "react";
import { useLocation, useNavigate } from "react-router";
import { getOne } from "../api/post";
import styles from "./Recipe.module.css";

interface author{
    userName : string
}

interface returnData {
  _id: string;
  title: string;
  recipe: string;
  createdAt: string;
  tags: Array<string>;
  viewsCount: number;
  imgUrl: string;
  author : author
}

const Recipe = () => {
  const _id = useLocation().pathname.slice(7);
  const navigate = useNavigate()
  const auth = useRef(false)
  const [result, setResult] = useState<returnData>({
    _id: "",
    title: "",
    recipe: "",
    tags: [],
    viewsCount: 0,
    createdAt: "",
    imgUrl: "",
    author : {userName:''}
  });
  const recipe = result.recipe.split('\n')
  useEffect(() => {
    getOne(_id).then((res) => {
      auth.current = (res.data.author._id === res.decoded._id)
      console.log(res)
      setResult(res.data);
    });
  }, []);
  const edit = () => {
    navigate(`/edit/${_id}`)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{result.title}</div>
      <div className={styles.info}>
        <span>{result.createdAt.slice(0, 10)}</span>
        {result.tags.map((res) => (
          <h3 className={styles.tags}>{res}</h3>
        ))}
        <span>Просмотрено : {result.viewsCount}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={result.imgUrl} alt='img' className={styles.img}/>
        </div>
        <div className={styles.description}>
            {recipe.map(res=>(
                <p>{res}</p>
            ))}
        </div>
      </div>
      <div className={styles.editor}>
        {auth.current? <div>
            <button className={styles.edit} onClick={edit}>Изменить</button>
        </div> : ''}
        <div>Автор : {result.author.userName}</div>
      </div>
    </div>
  );
};

export default Recipe;
