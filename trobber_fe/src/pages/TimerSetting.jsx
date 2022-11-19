import React from "react";
import styles from "../css/timerSetting.module.css";
import Countries from "./components/Countries";
import Memo from "./components/Memo";
import { Link } from "react-router-dom";
import Mypage from "./Mypage";
import { useState } from "react";

const TimerSetting = () => {
  const [visibility, setVisibility] = useState(false);
  const [memoValue, setMemoValue] = useState("");

  const toggleMenu = () => {
    setVisibility(!visibility);
  };
  const handleMouseDown = (event) => {
    toggleMenu();
  };
  const setMemo = (textValue) => {
    setMemoValue(textValue);
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
          <Memo started={false} setMemo={setMemo} />
        </div>
        <div className={styles.footer}>
          <Link
            to="/timer"
            state={{
              todo: memoValue,
            }}
          >
            <button className={styles.startButton}>Start Time Robbing</button>
          </Link>
          {/* <Link to="/timer">
            <button className={styles.startButton}>Start Time Robbing</button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default TimerSetting;
