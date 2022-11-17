import React from 'react';
import "./TimerSetting.css";
import Countries from "./components/Countries";

const TimerSetting = () => {
  return (
    <div>
      <div className="icons">
        <img className="menubar" src={require("./pageimg/menubar.png")} />
        <img className="graph" src={require("./pageimg/graph.png")} />
      </div>
      <div className="countries">
        <Countries/>
      </div>
    </div>
  );
};

export default TimerSetting;