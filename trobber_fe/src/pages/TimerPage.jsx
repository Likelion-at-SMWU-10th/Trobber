import React from "react";
import Mypage from "./Mypage";
import { useState } from "react";
import styles from "../css/timerPage.module.css";
import Memo from "./components/Memo";
import { Link } from "react-router-dom";

const TimerPage = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleMenu = () => {
    setVisibility(!visibility);
  };
  const handleMouseDown = (event) => {
    toggleMenu();
  };
  return (
    <div className={styles.container}>
      <Mypage handleMouseDown={handleMouseDown} visibility={visibility} />
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={styles.menubar}
            onClick={handleMouseDown}
            src="/images/whiteSlider.png"
          />
          <img className={styles.graph} src="/images/whiteChart.png" />
        </div>
        <div className={styles.currentInfo}>
          <div className={styles.countryInfo}>
            <div className={styles.leftInfo}>
              <span className={styles.weather}>Raining</span>
              <span className={styles.country}>JAPAN</span>
            </div>
            <div className={styles.rightInfo}>
              <span className={styles.date}>Dec. 20</span>
              <span className={styles.time}>10:03</span>
            </div>
          </div>
          <div className={styles.elapsedInfo}>
            <span className={styles.elapsedText}>Elapsed time</span>
            <span className={styles.elapsedTime}>10:03:46</span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/JAPAN.png"
            alt="JAPAN"
          />
        </div>
        <div className={styles.memo}>
          <Memo started={true} />
        </div>
        <div className={styles.footer}>
          <Link to="/timer">
            <button className={styles.startButton}>Start Time Robbing</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
