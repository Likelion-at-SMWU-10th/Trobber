import React from "react";
import styles from "../../css/memo.module.css";

const Memo = () => {
  return (
    <div className={styles.memo}>
      <div className={styles.text}>Memo :</div>
      <input className={styles.input}></input>
    </div>
  );
};

export default Memo;
