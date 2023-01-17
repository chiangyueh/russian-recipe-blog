import React from "react";
import styles from "./MenuBlock.module.css";
import abc from "../img/a.jpg";
const MenuBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.img}
        style={{ "--img": `url(${abc})` } as React.CSSProperties}
      >
        <div className={styles.content}>
            <h1 className={styles.title}>
                title
            </h1>
            <h3 className={styles.tags}>tags </h3>
        </div>
      </div>
    </div>
  );
};

export default MenuBlock;
