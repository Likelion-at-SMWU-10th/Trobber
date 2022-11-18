import React from 'react';
import "./TimerSetting.css";
import Countries from "./components/Countries";
import Memo from "./components/Memo";
import {Link} from 'react-router-dom';

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
      <div className="memo">
        <Memo/>
      </div>
      <div className="startbutton">
        <Link to = "/timer"><img className="startbutton" src={require("./pageimg/startbutton.png")} /></Link>
      </div>
    
    </div>
  );
};

export default TimerSetting;
