import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuBlock.module.css";

interface Props {
  tags: Array<string>;
  title: string;
  _id: string;
  imgUrl: string;
}

const MenuBlock = (props: Props) => {
  const { tags, title, _id, imgUrl } = props;
  const showContent = () => {
    console.log(123)
  }
  return (
      <div className={styles.wrapper}>
        <div
          className={styles.img}
          style={{ "--img": `url(${imgUrl})` } as React.CSSProperties}
          onClick={showContent}
        >
          <div className={styles.content}>
            <span className={styles.title}>{title}</span>
            <div className={styles.tagContainer}>
              {tags.map((res) => (
                <h3 className={styles.tags}>{res}</h3>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default MenuBlock;
