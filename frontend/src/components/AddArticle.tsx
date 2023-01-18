import React, { useState, useRef } from "react";
import styles from "./AddArticle.module.css";
import addArticle from "../mobx/AddArticle";
import { create } from "../api/post";
import { useNavigate } from "react-router";
const AddArticle = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [imgUrl, setImg] = useState("");
  const tags = useRef<Array<string>>([]);
  const [errMsg, setErrMsg] = useState("");
  const checkBox = (tag: string) => {
    const deleteTag = tags.current.indexOf(tag);
    if (deleteTag < 0) {
      tags.current.push(tag);
    } else {
      tags.current.splice(deleteTag, 1);
    }
  };
  const closeComponent = (e: React.MouseEvent<HTMLElement>) => {
    const wrapper = document.getElementById("addArticle");
    if (e.target === wrapper) {
      addArticle.close();
    }
  };
  const sendRecipe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const props = { title, recipe, tags: tags.current, imgUrl };
    create(props).then((res) => {
      if (res.message) {
        setErrMsg(res.message);
      } else {
        navigate(0);
      }
    });
  };

  return (
    <div className={styles.wrapper} onClick={closeComponent} id="addArticle">
      <form className={styles.container} onSubmit={sendRecipe}>
        <input
          className={styles.input}
          placeholder="Заголовка"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <label>Тэги</label>
        <div className={styles.tags}>
          <input
            type="checkbox"
            id="sweet"
            onChange={() => checkBox("сладкий")}
          />
          <label htmlFor="sweet">сладкий</label>
          <input
            type="checkbox"
            id="sour"
            onChange={() => checkBox("кислый")}
          />
          <label htmlFor="sour">кислый</label>
          <input
            type="checkbox"
            id="spicy"
            onChange={() => checkBox("горячий")}
          />
          <label htmlFor="spicy">горячий</label>
        </div>
        <textarea
          className={styles.textarea}
          placeholder="Рецепт"
          onChange={(e) => setRecipe(e.target.value)}
          value={recipe}
        ></textarea>
        <input
          type="url"
          className={styles.input}
          placeholder="URL изображения"
          onChange={(e) => setImg(e.target.value)}
          value={imgUrl}
        ></input>
        <div>
          <button className={styles.send}>Отправить</button>
          <span className={styles.errMsg}>{errMsg}</span>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
