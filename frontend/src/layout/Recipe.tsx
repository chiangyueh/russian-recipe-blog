import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getOne } from "../api/post";
import styles from "./Recipe.module.css";

interface returnData {
  _id: string;
  title: string;
  recipe: string;
  createdAt: string;
  tags: Array<string>;
  viewsCount: number;
  imgUrl: string;
}
const Recipe = () => {
  const _id = useLocation().pathname.slice(7);
  const [result, setResult] = useState<returnData>({
    _id: "",
    title: "",
    recipe: "",
    tags: [],
    viewsCount: 0,
    createdAt: "",
    imgUrl: "",
  });
  const recipe = result.recipe.split('\n')
  useEffect(() => {
    getOne(_id).then((res) => {
      setResult(res);
    });
  }, []);
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
    </div>
  );
};

export default Recipe;
