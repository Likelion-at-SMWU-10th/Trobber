import React from "react";
import styles from "../css/mypage.module.css";

const Mypage = ({ handleMouseDown, visibility }) => {
  return (
    <div
      className={`${styles.container} ${
        visibility ? styles.show : styles.hide
      }`}
    >
      <h1>mypage</h1>
      <button onClick={handleMouseDown}>hide!</button>
    </div>
  );
};

export default Mypage;
