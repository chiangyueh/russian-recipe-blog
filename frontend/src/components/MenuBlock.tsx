import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuBlock.module.css";

interface Props {
  tags: Array<string>;
  title: string;
  _id: string;
  imgUrl: string;
}

const MenuBlock = (props: Props) => {
  const navigate = useNavigate()
  const { tags, title, _id, imgUrl } = props;
  const showContent = () => {
    navigate(`/posts/${_id}`)
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
              {tags.map((res,index) => (
                <h3 className={styles.tags} key={index}>{res}</h3>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default MenuBlock;
