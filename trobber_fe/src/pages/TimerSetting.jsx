import React from 'react';
import "./TimerSetting.css";

const TimerSetting = () => {
  return (
    <div>
      <div className="icons">
        <img className="menubar" src={require("./pageimg/menubar.png")} />
        <img className="graph" src={require("./pageimg/graph.png")} />
      </div>
    </div>
  );
};

export default TimerSetting;