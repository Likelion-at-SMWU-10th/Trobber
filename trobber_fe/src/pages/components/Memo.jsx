import React from "react";
import styles from "../../css/memo.module.css";

const Memo = ({ started, setMemo, todo }) => {
  const onChangeValue = (event) => {
    setMemo(event.target.value);
  };

  return (
    <div className={styles.memo}>
      <div className={`${styles.text} ${started && styles.disabled}`}>
        Memo :
      </div>
      <input
        className={`${styles.input} ${started && styles.disabled}`}
        disabled={started ? true : false}
        onChange={onChangeValue}
        placeholder={started && todo}
      ></input>
    </div>
  );
};

export default Memo;
