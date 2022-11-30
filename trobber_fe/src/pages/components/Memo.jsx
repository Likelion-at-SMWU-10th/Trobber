import React from "react";
import styles from "../../css/memo.module.css";

const Memo = ({ isStarted }) => {
  return (
    <div className={styles.memo}>
      <div className={`${styles.text} ${isStarted && styles.disabled}`}>
        Memo :
      </div>
      <input
        className={`${styles.input} ${isStarted && styles.disabled}`}
        disabled={isStarted}
      ></input>
    </div>
  );
};

export default Memo;
