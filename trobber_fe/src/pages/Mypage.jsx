import React from "react";
import styles from "../css/mypage.module.css";
import Ticket from "./Ticket";

const Mypage = ({ handleMouseDown, visibility }) => {
  return (
    <div
      className={`${styles.container} ${
        visibility ? styles.show : styles.hide
      }`}
    >
      <header className={styles.header}>
        <div className={styles.profileArea}>
          <img
            className={styles.profile}
            src="/images/profile.png"
            alt="profile"
          />
          <div className={styles.info}>
            <span className={styles.email}>fisflower1030@gmail.com</span>
            <span className={styles.nickname}>TIGOWLER</span>
          </div>
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
        <span className={styles.subtitle}>History (9)</span>
        {/* <Ticket country={"PARIS"} />
        <Ticket country={"NEWYORK"} />
        <Ticket country={"LONDON"} />
        <Ticket country={"CHINA"} /> */}
      </div>
      <button className={styles.more}>Show more history</button>
    </div>
  );
};

export default Mypage;
