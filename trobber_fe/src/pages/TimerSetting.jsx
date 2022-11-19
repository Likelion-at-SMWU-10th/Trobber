import React from "react";
import styles from "../css/timerSetting.module.css";
import Countries from "./components/Countries";
import Memo from "./components/Memo";
import { Link } from "react-router-dom";
import Mypage from "./Mypage";
import { useState } from "react";

const TimerSetting = () => {
  const [visibility, setVisibility] = useState(false);

  const toggleMenu = () => {
    setVisibility(!visibility);
  };
  const handleMouseDown = (event) => {
    toggleMenu();
  };

  return (
    <>
      <Mypage handleMouseDown={handleMouseDown} visibility={visibility} />
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={styles.menubar}
            onClick={handleMouseDown}
            src={require("./pageimg/menubar.png")}
          />
          <img className={styles.graph} src={require("./pageimg/graph.png")} />
        </div>
        <div className={styles.countries}>
          <Countries />
        </div>
        <div className={styles.memo}>
          <Memo />
        </div>
        <div className={styles.footer}>
          <Link to="/timer">
            <button className={styles.startButton}>Start Time Robbing</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TimerSetting;
