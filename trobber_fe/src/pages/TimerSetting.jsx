import React from "react";
import styles from "../css/timerSetting.module.css";
import Countries from "./components/Countries";
import Memo from "./components/Memo";
import { Link } from "react-router-dom";
import Mypage from "./Mypage";
import { useState } from "react";

const TimerSetting = () => {
  // state
  const [visibility, setVisibility] = useState(false);
  const [memoValue, setMemoValue] = useState("");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [started, setStarted] = useState(false);
  const [btnColors, setBtnColors] = useState({
    backgroundColor: "#CAE9EA",
    textColor: "#000000",
  });

  // func
  const toggleMenu = () => {
    setVisibility(!visibility);
  };
  const handleMouseDown = (event) => {
    toggleMenu();
  };
  const setMemo = (textValue) => {
    setMemoValue(textValue);
  };
  const startTimer = () => {
    // background color
    setBgColor("#97D4D6");

    // inactive carousel
    // disabled input and change memo color
    setStarted(true);

    // button color
    setBtnColors({
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
    });

    // move text

    // show elapsedTime

    // change header icon color
  };

  return (
    <>
      <Mypage handleMouseDown={handleMouseDown} visibility={visibility} />
      <div
        className={styles.container}
        style={{
          transition: "1s all ease-in-out",
          backgroundColor: bgColor,
        }}
      >
        <div className={styles.header}>
          <img
            className={styles.menubar}
            onClick={handleMouseDown}
            src={require("./pageimg/menubar.png")}
          />
          <img className={styles.graph} src={require("./pageimg/graph.png")} />
        </div>
        <div className={styles.countries}>
          <Countries isStarted={started} />
        </div>
        <div className={styles.memo}>
          <Memo isStarted={started} setMemo={setMemo} />
        </div>
        <div className={styles.footer}>
          <button
            className={styles.startButton}
            onClick={startTimer}
            style={{
              transition: "1s all ease-in-out",
              backgroundColor: btnColors.backgroundColor,
              color: btnColors.textColor,
            }}
          >
            Start Time Robbing
          </button>
        </div>
        {/* <div className={styles.footer}>
          <Link
            to="/timer"
            state={{
              todo: memoValue,
            }}
          >
            <button className={styles.startButton}>Start Time Robbing</button>
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default TimerSetting;
