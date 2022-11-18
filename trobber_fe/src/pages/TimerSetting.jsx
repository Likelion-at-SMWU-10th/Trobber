import React from 'react';
import "./TimerSetting.css";
import Countries from "./components/Countries";
import Memo from "./components/Memo";
import {Link} from 'react-router-dom';
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
    <div>
      <div className="icons">
        <img className="menubar" onClick={handleMouseDown} src={require("./pageimg/menubar.png")} />
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
    </>
  );
};

export default TimerSetting;
