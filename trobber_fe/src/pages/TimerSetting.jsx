import React from "react";
import styles from "../css/timerSetting.module.css";
import Countries from "./components/Countries";
import Memo from "./components/Memo";
import Mypage from "./Mypage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TimerSetting = ({ weatherService }) => {
  // state
  const [visibility, setVisibility] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState({
    tokyo: ["Dec", "20", "10", "30"], // month, day, hour, minutes
    paris: ["Dec", "20", "10", "30"],
    newYork: ["Dec", "20", "10", "30"],
    beijing: ["Dec", "20", "10", "30"],
    london: ["Dec", "20", "10", "30"],
  });

  const countryTitles = ["tokyo", "paris", "newYork", "beijing", "london"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const countryOffsets = {
    tokyo: 9,
    paris: 2,
    newYork: -5,
    beijing: 8,
    london: 0,
  };

  useEffect(() => {
    initializeWorldTime();
  }, []);

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
    }
  };

  const initializeWorldTime = () => {
    for (let i = 0; i < 5; i++) {
      getWorldTime(countryOffsets[countryTitles[i]], countryTitles[i]);
    }
  };

  const getWorldTime = (tzOffset, country) => {
    const now = new Date();
    const tz =
      now.getTime() + now.getTimezoneOffset() * 60000 + tzOffset * 3600000;
    now.setTime(tz);

    const newMonth = now.getMonth();
    const newDate = now.getDate().toString();
    const newHours = now.getHours().toString();
    const newMinutes = now.getMinutes().toString();

    const newTime = { ...time };
    newTime[country][0] = months[newMonth]; // month
    newTime[country][1] = newDate.length < 2 ? "0" + newDate : newDate; // day
    newTime[country][2] = newHours.length < 2 ? "0" + newHours : newHours; // hour
    newTime[country][3] = newMinutes.length < 2 ? "0" + newMinutes : newMinutes; // minute

    setTime(newTime);
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
          <Link to="/">
            <img
              className={styles.graph}
              src={started ? "/images/whiteChart.png" : "/images/chart.png"}
            />
          </Link>
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
          <Countries
            isStarted={started}
            weatherService={weatherService}
            time={time}
          />
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
