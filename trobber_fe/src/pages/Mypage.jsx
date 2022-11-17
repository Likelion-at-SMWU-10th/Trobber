import React from "react";
import styles from "../css/mypage.module.css";

const Mypage = ({ handleMouseDown, visibility }) => {
  return (
    <div
      className={`${styles.container} ${
        visibility ? styles.show : styles.hide
      }`}
    >
      <header className={styles.header}>
        <img
          className={styles.profile}
          src="/images/profile.png"
          alt="profile"
        />
        <div className={styles.info}>
          <span className={styles.email}>fisflower1030@gmail.com</span>
          <span className={styles.nickname}>TIGOWLER</span>
        </div>
        <img
          onClick={handleMouseDown}
          className={styles.backBtn}
          src="/images/arrow.png"
          alt="arrow"
        />
        {/* <button onClick={handleMouseDown}>hide!</button> */}
      </header>
      <div className={styles.tickets}>
        <span className={styles.subtitle}></span>
      </div>
      <button className={styles.more}>Show more history</button>
    </div>
  );
};

export default Mypage;
