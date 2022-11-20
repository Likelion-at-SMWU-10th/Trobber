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
  const [started, setStarted] = useState(false);

  // func
  const toggleMenu = () => {
    setVisibility(!visibility);
  };
  const handleMouseDown = (event) => {
    toggleMenu();
  };
  const toggleTimer = () => {
    if (started) {
      setStarted(false);
    } else {
      setStarted(true);
      // change header icon color
    }
  };

  return (
    <>
      <Mypage handleMouseDown={handleMouseDown} visibility={visibility} />
      <div
        className={styles.container}
        style={{
          backgroundColor: `${started ? "#97D4D6" : "#FFFFFF"}`,
        }}
      >
        <div className={styles.header}>
          <img
            className={styles.menubar}
            onClick={handleMouseDown}
            src={started ? "/images/whiteSlider.png" : "/images/slider.png"}
          />
          <img
            className={styles.graph}
            src={started ? "/images/whiteChart.png" : "/images/chart.png"}
          />
        </div>
        <div
          className={styles.countries}
          style={{
            marginBottom: `${started ? 1.5 : 0}rem`,
          }}
        >
          <div
            className={styles.elapsedInfo}
            style={{
              opacity: `${started ? 1 : 0}`,
              transform: `translateY(${started ? 5 : 10}em) translateX(6.5em)`,
            }}
          >
            <span className={styles.elapsedText}>Elapsed Time</span>
            <span className={styles.elapsedTime}>10:03:46</span>
          </div>
          <Countries isStarted={started} />
        </div>
        <div className={styles.memo}>
          <Memo isStarted={started} />
        </div>
        <div className={styles.footer}>
          <button
            className={styles.startButton}
            onClick={toggleTimer}
            style={{
              backgroundColor: `${started ? "#FFFFFF" : "#CAE9EA"}`,
              color: `${started ? "#97D4D6" : "#000000"}`,
            }}
          >
            {started ? "Stop Time Robbing" : "Start Time Robbing"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TimerSetting;
