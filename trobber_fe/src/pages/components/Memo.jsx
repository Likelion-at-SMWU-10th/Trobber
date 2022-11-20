import React from "react";
import styles from "../../css/memo.module.css";

const Memo = ({ isStarted, setMemo, todo }) => {
  const onChangeValue = (event) => {
    setMemo(event.target.value);
  };

  return (
    <div className={styles.memo}>
      <div className={`${styles.text} ${isStarted && styles.disabled}`}>
        Memo :
      </div>
      <input
        className={`${styles.input} ${isStarted && styles.disabled}`}
        disabled={isStarted}
        onChange={onChangeValue}
        // placeholder={started ? todo : ""}
      ></input>
    </div>
  );
};

export default Memo;
